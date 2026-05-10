import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Layouts
import PublicLayout from './components/layout/PublicLayout';
import StudentLayout from './components/layout/StudentLayout';
import InstructorLayout from './components/layout/InstructorLayout';
import AdminLayout from './components/layout/AdminLayout';

// Public Pages
import HomePage from './features/public/HomePage';
import CourseCatalogPage from './features/public/CourseCatalogPage';
import CourseDetailPage from './features/public/CourseDetailPage';
import CertificateVerifyPage from './features/public/CertificateVerifyPage';

// Auth Pages
import LoginPage from './features/auth/LoginPage';
import RegisterPage from './features/auth/RegisterPage';

// Student Pages
import StudentDashboard from './features/student/StudentDashboard';
import MyCoursesPage from './features/student/MyCoursesPage';
import ProgressPage from './features/student/ProgressPage';
import CommunityPage from './features/student/CommunityPage';
import QuizPlayerPage from './features/student/QuizPlayerPage';
import AssignmentPage from './features/student/AssignmentPage';
import CertificatePage from './features/student/CertificatePage';
import LearningPlayerPage from './features/student/LearningPlayerPage';
import ProfilePage from './features/student/ProfilePage';

// Instructor Pages
import Dashboard from './features/instructor/Dashboard';
import CourseForm from './features/instructor/CourseForm';
import SyllabusBuilder from './features/instructor/SyllabusBuilder';
import AssignmentGrading from './features/instructor/AssignmentGrading';

// Admin Pages
import AdminDashboard from './features/admin/AdminDashboard';
import UserManagement from './features/admin/UserManagement';
import CourseManagement from './features/admin/CourseManagement';
import CategoryManagement from './features/admin/CategoryManagement';
import AdminReportsPage from './features/admin/AdminReportsPage';
import AdminSettingsPage from './features/admin/AdminSettingsPage';
import AdminCertificatesPage from './features/admin/AdminCertificatesPage';

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();
  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) {
    if (user.role === 'admin') return <Navigate to="/admin" replace />;
    if (user.role === 'instructor') return <Navigate to="/instructor" replace />;
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="courses" element={<CourseCatalogPage />} />
            <Route path="courses/:id" element={<CourseDetailPage />} />
          </Route>
          <Route path="/verify/:code" element={<CertificateVerifyPage />} />
          
          {/* Student Portal */}
          <Route path="/dashboard" element={<ProtectedRoute role="student"><StudentLayout /></ProtectedRoute>}>
            <Route index element={<StudentDashboard />} />
            <Route path="my-courses" element={<MyCoursesPage />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="assignment/:lessonId" element={<AssignmentPage />} />
            <Route path="certificates" element={<CertificatePage />} />
            <Route path="settings" element={<ProfilePage />} />
          </Route>
          <Route path="/learn/player/:courseId/:lessonId" element={<ProtectedRoute role="student"><LearningPlayerPage /></ProtectedRoute>} />
          <Route path="/learn/quiz/:lessonId" element={<ProtectedRoute role="student"><QuizPlayerPage /></ProtectedRoute>} />

          {/* Instructor Portal */}
          <Route path="/instructor" element={<ProtectedRoute role="instructor"><InstructorLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="courses" element={<Dashboard />} /> {/* Placeholder list */}
            <Route path="courses/create" element={<CourseForm />} />
            <Route path="grading" element={<AssignmentGrading />} />
            <Route path="settings" element={<ProfilePage />} />
          </Route>

          {/* Admin Portal */}
          <Route path="/admin" element={<ProtectedRoute role="admin"><AdminLayout /></ProtectedRoute>}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="courses" element={<CourseManagement />} />
            <Route path="categories" element={<CategoryManagement />} />
            <Route path="certificates" element={<AdminCertificatesPage />} />
            <Route path="reports" element={<AdminReportsPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
