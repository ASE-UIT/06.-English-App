import React, { useState } from 'react';

interface PricingFormProps {
  onSavePricing: (price: number, startDate: string, endDate: string) => void;
}

const PricingForm: React.FC<PricingFormProps> = ({ onSavePricing }) => {
  const [price, setPrice] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (price && startDate && endDate) {
      onSavePricing(parseFloat(price), startDate, endDate);
      setPrice('');
      setStartDate('');
      setEndDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Giá khóa học:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Nhập giá"
      />

      <label>Ngày bắt đầu:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <label>Ngày kết thúc:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button type="submit">Lưu & Tiếp Tục</button>
    </form>
  );
};

export default PricingForm;
