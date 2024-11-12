import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CoursePage from 'src/pages/CoursePage/coursePage';
import CreateCoursePage from 'src/pages/CoursePage/createCoursePage';
import LessonPage from 'src/pages/CoursePage/lessonPage';
import SectionPage from 'src/pages/CoursePage/sectionPage';
import QuestionGroupPage from 'src/pages/CoursePage/questionGroupPage';
import PreviewCoursePage from 'src/pages/CoursePage/previewCoursePage';
import PricingPage from 'src/pages/CoursePage/pricingPage';
import PublishCoursePage from 'src/pages/CoursePage/publishCoursePage';

const router = createBrowserRouter([
  { path: "/", element: <CoursePage /> }, 
  { path: "/create-course", element: <CreateCoursePage /> },
  { path: "/course/:id/lesson", element: <LessonPage /> },
  { path: "/course/:id/section", element: <SectionPage /> },
  { path: "/course/:id/questions", element: <QuestionGroupPage /> },
  { path: "/course/:id/preview", element: <PreviewCoursePage /> },
  { path: "/course/:id/pricing", element: <PricingPage /> },
  { path: "/course/:id/publish", element: <PublishCoursePage /> },
]);

const AppRouter: React.FC = () => <RouterProvider router={router} />;

export default AppRouter;
