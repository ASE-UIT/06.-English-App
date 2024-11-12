import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Course {
  id?: string;
  title: string;
  language: string;
  level: string;
  description: string;
  price?: number;
  startDate?: string;
  endDate?: string;
  lessons?: any[];
}

interface CourseContextProps {
  course: Course;
  setCourse: (course: Course) => void;
  updateCourse: (updatedFields: Partial<Course>) => void;
}

const CourseContext = createContext<CourseContextProps | undefined>(undefined);

export const CourseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [course, setCourse] = useState<Course>({
    title: '',
    language: '',
    level: '',
    description: '',
    lessons: [],
  });

  const updateCourse = (updatedFields: Partial<Course>) => {
    setCourse((prevCourse) => ({ ...prevCourse, ...updatedFields }));
  };

  return (
    <CourseContext.Provider value={{ course, setCourse, updateCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

// Custom hook to use the CourseContext
export const useCourse = (): CourseContextProps => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within a CourseProvider');
  }
  return context;
};
