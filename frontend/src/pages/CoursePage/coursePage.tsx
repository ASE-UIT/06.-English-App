import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  status: string;
}

const CoursePage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const response = await fetch('http://localhost:3000/api/courses');
    const data = await response.json(); 
    setCourses(data);
  };

  return (
    <div>
      <h2>Danh sách khóa học</h2>
      <Link to="/create-course">Tạo khóa học mới</Link>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}/lesson`}>{course.title}</Link> - {course.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePage;
