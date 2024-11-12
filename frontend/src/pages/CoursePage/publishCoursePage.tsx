import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from 'src/styles/publishCoursePage.module.css';

const PublishCoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handlePublish = async () => {
    const response = await fetch(`http://localhost:3000/api/courses/${id}/publish`, {
      method: 'PUT',
    });

    if (response.ok) {
      alert('Khóa học đã được publish thành công!');
      navigate('/');
    } else {
      alert('Có lỗi xảy ra khi publish khóa học.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Publish Khóa Học</h2>
      <p className={styles.confirmText}>Bạn có chắc chắn muốn publish khóa học này?</p>
      <button onClick={handlePublish} className={styles.button}>Confirm Publish</button>
    </div>
  );
};

export default PublishCoursePage;
