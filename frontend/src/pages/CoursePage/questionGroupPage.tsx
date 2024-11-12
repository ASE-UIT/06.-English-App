import React from 'react';
import { useParams, Link } from 'react-router-dom';
import QuestionForm from 'src/components/Course/questionForm';
import { addQuestion } from 'src/apis/courseApi';
import styles from 'src/styles/questionGroupPage.module.css';

const QuestionGroupPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const handleAddQuestion = async (questionType: string, content: string) => {
    await addQuestion(id || '', questionType, content);
    alert('Câu hỏi đã được thêm thành công!');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Thêm Câu Hỏi Cho Section</h2>
      <QuestionForm onAddQuestion={handleAddQuestion} />
      <Link to={`/course/${id}/preview`} className={styles.link}>Xem Trước Khóa Học</Link>
    </div>
  );
};

export default QuestionGroupPage;

