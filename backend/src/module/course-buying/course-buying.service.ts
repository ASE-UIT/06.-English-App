import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CourseBuying } from './entities/course-buying.entity';
import { CreateCourseBuyingDto } from './dto/create-course-buying.dto';
import { UpdateCourseBuyingDto } from './dto/update-course-buying.dto';
import Stripe from 'stripe';
import axios from 'axios';

@Injectable()
export class CourseBuyingService {
  constructor(
    @InjectRepository(CourseBuying)
    private readonly courseBuyingRepository: Repository<CourseBuying>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createCourseBuyingDto: CreateCourseBuyingDto) {
    const courseBuying = this.courseBuyingRepository.create(createCourseBuyingDto);
    return await this.courseBuyingRepository.save(courseBuying);
  }

  async findAll() {
    return await this.courseBuyingRepository.find({ relations: ['course', 'student'] });
  }

  async findOne(id: number) {
    const courseBuying = await this.courseBuyingRepository.findOne({
      where: { id: id.toString() },
      relations: ['course', 'student'],
    });

    if (!courseBuying) {
      throw new NotFoundException('Course buying not found');
    }

    return courseBuying;
  }

  async update(id: number, updateCourseBuyingDto: UpdateCourseBuyingDto) {
    const existingCourseBuying = await this.findOne(id);
    if (!existingCourseBuying) {
      throw new NotFoundException('Course buying not found');
    }
    await this.courseBuyingRepository.update(id, updateCourseBuyingDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.courseBuyingRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Course buying not found');
    }
    return { deleted: true };
  }

  private stripe = new Stripe('your-stripe-secret-key', {
    apiVersion: '2024-10-28.acacia',
  });

  async createPaymentSession(courseBuyingId: number) {
    const courseBuying = await this.findOne(courseBuyingId);
    if (!courseBuying) {
      throw new NotFoundException('Course buying not found');
    }

    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: 1000,
      currency: 'usd',
      metadata: { courseBuyingId: courseBuying.id },
    });

    return { clientSecret: paymentIntent.client_secret };
  }

  async createVNPayPaymentSession(courseBuyingId: number) {
    const courseBuying = await this.findOne(courseBuyingId);
    if (!courseBuying) {
      throw new NotFoundException('Course buying not found');
    }

    const paymentData = {
      amount: 1000, // Giá tiền tính toán
      orderInfo: 'Thanh toán khóa học',
      returnUrl: 'your-return-url', 
      orderId: courseBuying.id,
    };

    const response = await axios.post('https://vnpay-api-endpoint.com', paymentData);

    return response.data;
  }
}

