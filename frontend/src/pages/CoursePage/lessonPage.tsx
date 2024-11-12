import React from 'react';
import { useParams, Link } from 'react-router-dom';
import VocabularyForm from 'src/components/Course/vocabularyForm';
import GrammarForm from 'src/components/Course/grammarForm';
import MaterialUpload from 'src/components/Course/materialUpload';
import { addVocabulary, addGrammar, uploadMaterial } from 'src/apis/courseApi';
import styles from 'src/styles/lessonPage.module.css';

const LessonPage: React.FC = () => {  
  const { id } = useParams<{ id: string }>();

  const handleAddVocabulary = async (term: string) => {
    await addVocabulary(id || '', term);
    alert('Từ vựng đã được thêm thành công!');
  };

  const handleAddGrammar = async (rule: string) => {
    await addGrammar(id || '', rule);
    alert('Ngữ pháp đã được thêm thành công!');
  };

  const handleUploadMaterial = async (file: File) => {
    await uploadMaterial(id || '', file);
    alert('Material đã được upload thành công!');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Thêm Lesson Cho Khóa Học</h2>
      <div className={styles.formSection}>
        <VocabularyForm onAddVocabulary={handleAddVocabulary} />
      </div>
      <div className={styles.formSection}>
        <GrammarForm onAddGrammar={handleAddGrammar} />
      </div>
      <div className={styles.formSection}>
        <MaterialUpload onUploadMaterial={handleUploadMaterial} />
      </div>
      <Link to={`/course/${id}/section`} className={styles.link}>
        Tiếp Tục Tạo Section
      </Link>
    </div>
  );
};

export default LessonPage;
