import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from 'src/styles/sectionPage.module.css';

const SectionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [sectionType, setSectionType] = useState('writing');

  const handleAddSection = async () => {
    await fetch(`http://localhost:3000/api/courses/${id}/sections`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: sectionType }),
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Thêm Section</h2>
      <select
        className={styles.select}
        value={sectionType}
        onChange={(e) => setSectionType(e.target.value)}
      >
        <option value="writing">Writing</option>
        <option value="reading">Reading</option>
        <option value="listening">Listening</option>
        <option value="speaking">Speaking</option>
      </select>
      <button className={styles.button} onClick={handleAddSection}>
        Thêm Section
      </button>
      <Link to={`/course/${id}/questions`} className={styles.link}>
        Thêm câu hỏi cho Section
      </Link>
    </div>
  );
};

export default SectionPage;
