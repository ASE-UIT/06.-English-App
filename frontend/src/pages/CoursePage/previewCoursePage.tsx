import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from 'src/styles/previewCoursePage.module.css';

interface Lesson {
  title: string;
}

interface Course {
  id: number;
  title: string;
  lessons: Lesson[];
}

const PreviewCoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  // Define the fetchCourse function with useCallback to avoid dependency warnings
  const fetchCourse = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/courses/${id}`);
      if (!response.ok) throw new Error('Failed to fetch course');
      const data = await response.json();
      setCourse(data);
    } catch (error) {
      console.error('Error fetching course:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Xem Trước Khóa Học</h2>
      {course ? (
        <div>
          <h3 className={styles.courseTitle}>Tiêu đề: {course.title}</h3>
          <h4>Lessons:</h4>
          <ul className={styles.lessonList}>
            {course.lessons.map((lesson, index) => (
              <li key={index} className={styles.lessonItem}>{lesson.title}</li>
            ))}
          </ul>
          <Link to={`/course/${id}/pricing`} className={styles.link}>
            Thiết Lập Giá
          </Link>
        </div>
      ) : (
        <p className={styles.loading}>Đang tải...</p>
      )}
    </div>
  );
};

export default PreviewCoursePage;
