import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from 'src/styles/createCoursePage.module.css';

const CreateCoursePage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('en');
  const [level, setLevel] = useState('beginner');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('language', language);
    formData.append('level', level);
    formData.append('description', description);
    if (thumbnail) formData.append('thumbnail', thumbnail);

    const response = await fetch('http://localhost:3000/api/courses', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const course = await response.json();
      navigate(`/course/${course.id}/lesson`);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tạo khóa học mới</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Tiêu đề</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Ngôn ngữ</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={styles.select}
          >
            <option value="en">Tiếng Anh</option>
            <option value="vi">Tiếng Việt</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Trình độ</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className={styles.select}
          >
            <option value="beginner">Sơ cấp</option>
            <option value="intermediate">Trung cấp</option>
            <option value="advanced">Cao cấp</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Mô tả</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Ảnh đại diện</label>
          <input
            type="file"
            onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>Lưu & Tiếp Tục</button>
      </form>
    </div>
  );
};

export default CreateCoursePage;
