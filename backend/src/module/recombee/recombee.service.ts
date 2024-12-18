import { Injectable, Logger } from '@nestjs/common';
import { ApiClient, requests } from 'recombee-api-client';
import { ConfigService } from '@nestjs/config';
import { RECOMBEE_INTERACTION } from '../../utils/constants';
@Injectable()
export class RecombeeService {
  private readonly logger = new Logger(RecombeeService.name);
  private readonly client: ApiClient;

  constructor(private readonly configService: ConfigService) {
    const recombee = this.configService.get('recombee');
    this.client = new ApiClient(recombee.databaseId, recombee.apiKey, {
      region: recombee.region,
    });
  }
  async addUser(userId: string): Promise<void> {
    try {
      await this.client.send(new requests.AddUser(userId));
      this.logger.log(`User ${userId} added successfully.`);
    } catch (error) {
      this.logger.error(`Error adding user ${userId}:`, error);
      throw error;
    }
  }
  async addItem(
    itemId: string,
    properties: Record<string, any>,
  ): Promise<void> {
    try {
      await this.client.send(
        new requests.SetItemValues(itemId, properties, {
          cascadeCreate: true,
        }),
      );
      this.logger.log(`Item ${itemId} added successfully.`);
    } catch (error) {
      this.logger.error(`Error adding item ${itemId}:`, error);
      throw error;
    }
  }
  async addInteraction(
    interactionType: RECOMBEE_INTERACTION,
    userId: string,
    itemId: string,
  ): Promise<void> {
    const timestamp = new Date().toISOString();
    try {
      if (interactionType === RECOMBEE_INTERACTION.VIEW) {
        await this.client.send(
          new requests.AddDetailView(userId, itemId, {
            timestamp,
          }),
        );
      } else if (interactionType === RECOMBEE_INTERACTION.PURCHASE) {
        await this.client.send(
          new requests.AddPurchase(userId, itemId, {
            timestamp,
          }),
        );
      } else {
        return this.logger.error('Invalid interaction type');
      }
      this.logger.log(
        `${interactionType} interaction added: User ${userId} -> Item ${itemId}`,
      );
    } catch (error) {
      this.logger.error(`Error adding ${interactionType} interaction:`, error);
      throw error;
    }
  }

  async recommendItems(
    userId: string,
    count: number,
  ): Promise<{ id: string }[]> {
    try {
      const recommendations = await this.client.send(
        new requests.RecommendItemsToUser(userId, count),
      );
      this.logger.log(
        `Recommendations for user ${userId}: ${JSON.stringify(
          recommendations.recomms,
        )}`,
      );
      return recommendations.recomms;
    } catch (error) {
      this.logger.error(`Error fetching recommendations for ${userId}:`, error);
      throw error;
    }
  }
}
