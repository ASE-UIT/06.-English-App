import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PricingForm from 'src/components/Course/pricingForm';
import { setCoursePricing } from 'src/apis/courseApi';
import styles from 'src/styles/pricingPage.module.css';

const PricingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleSavePricing = async (price: number, startDate: string, endDate: string) => {
    await setCoursePricing(id || '', price, startDate, endDate);
    alert('Thiết lập giá thành công!');
    navigate(`/course/${id}/publish`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Thiết Lập Giá Cho Khóa Học</h2>
      <PricingForm onSavePricing={handleSavePricing} />
    </div>
  );
};

export default PricingPage;

