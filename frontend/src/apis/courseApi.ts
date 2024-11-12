const BASE_URL = 'http://localhost:3000/api';

// Fetch danh sách khóa học
export const fetchCourses = async () => {
  const response = await fetch(`${BASE_URL}/courses`);
  if (!response.ok) {
    throw new Error('Failed to fetch courses');
  }
  return response.json();
};

// Tạo khóa học mới
export const createCourse = async (courseData: FormData) => {
  const response = await fetch(`${BASE_URL}/courses`, {
    method: 'POST',
    body: courseData,
  });
  if (!response.ok) {
    throw new Error('Failed to create course');
  }
  return response.json();
};

// Lấy chi tiết một khóa học
export const fetchCourseById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/courses/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch course details');
  }
  return response.json();
};

// Thêm từ vựng vào lesson của khóa học
export const addVocabulary = async (courseId: string, term: string) => {
  const response = await fetch(`${BASE_URL}/courses/${courseId}/vocabulary`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ term }),
  });
  if (!response.ok) {
    throw new Error('Failed to add vocabulary');
  }
  return response.json();
};

// Thêm ngữ pháp vào lesson của khóa học
export const addGrammar = async (courseId: string, rule: string) => {
  const response = await fetch(`${BASE_URL}/courses/${courseId}/grammar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rule }),
  });
  if (!response.ok) {
    throw new Error('Failed to add grammar');
  }
  return response.json();
};

// Upload materials (video hoặc tài liệu) vào lesson của khóa học
export const uploadMaterial = async (courseId: string, material: File) => {
  const formData = new FormData();
  formData.append('file', material);

  const response = await fetch(`${BASE_URL}/courses/${courseId}/materials`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('Failed to upload material');
  }
  return response.json();
};

// Thêm section vào lesson
export const addSection = async (courseId: string, sectionType: string) => {
  const response = await fetch(`${BASE_URL}/courses/${courseId}/sections`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: sectionType }),
  });
  if (!response.ok) {
    throw new Error('Failed to add section');
  }
  return response.json();
};

// Thêm câu hỏi vào section
export const addQuestion = async (
  courseId: string,
  questionType: string,
  questionContent: string
) => {
  const response = await fetch(`${BASE_URL}/courses/${courseId}/questions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: questionType,
      content: questionContent,
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to add question');
  }
  return response.json();
};

// Thiết lập giá khóa học
export const setCoursePricing = async (
  courseId: string,
  price: number,
  startDate: string,
  endDate: string
) => {
  const response = await fetch(`${BASE_URL}/courses/${courseId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      price,
      startDate,
      endDate,
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to set course pricing');
  }
  return response.json();
};

// Publish khóa học
export const publishCourse = async (courseId: string) => {
  const response = await fetch(`${BASE_URL}/courses/${courseId}/publish`, {
    method: 'PUT',
  });
  if (!response.ok) {
    throw new Error('Failed to publish course');
  }
  return response.json();
};
