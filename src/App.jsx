import { Outlet } from 'react-router';
import Landing from './components/Landing/Landing.jsx'
import NavBar from './components/Landing/NavBar/NavBar.jsx';
import { QueryClient,QueryClientProvider,useQuery  } from '@tanstack/react-query';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import NotFound from './components/error/NotFound.jsx';
import Footer from './components/footer/Footer.jsx';
import CoursePage from './components/Courses/Courses.jsx';
import BlogPage from './components/blog/BlogPage.jsx';
import BlogDetailPage from './components/blog/BlogDetailPage.jsx';
import AboutUsPage from './components/AboutUsPage/AboutUsPage.jsx';
import ContactUsPage from './components/Contactus/ContactUs.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/SignUp/Signup.jsx';
import ProfileScreen from './components/profile/ViewProfile.jsx';
import EditProfile from './components/profile/EditProfile.jsx';
import ChangePassword from './components/profile/ChangePassword.jsx';
import MyLearnings from './components/Learnings/MyLearnings.jsx';
import CourseDetailsPage from './components/Courses/CourseDetailsPage.jsx';
import CategoriesPage from './components/Landing/categories/Categories.jsx';
import CourseContentPage from './components/Learnings/CourseContentPage.jsx';
import Sidebar from './components/Tutor_Components/sidebar/Sidebar.jsx'
import TutorDashboard from './components/Tutor_Components/Dashboard/TutorDashboard.jsx';
import TutorCourses from './components/Tutor_Components/Courses/TutorCourses.jsx';
import CourseForm from './components/Tutor_Components/Courses/CourseForm.jsx';
import TutorBlogPage from './components/Tutor_Components/blog/TutorBlogPage.jsx';
import TutorBlogDetailPage from './components/Tutor_Components/blog/TutorBlogDetailPage.jsx';
import AddBlogPage from './components/Tutor_Components/blog/AddBlogPage.jsx';
import SettingsPage from './components/Tutor_Components/settings/SettingsPage.jsx';
import PaymentDetailPage from './components/Tutor_Components/Payments/PaymentDetailPage.jsx';
import LessonListPage from './components/Tutor_Components/Courses/LessonListPage.jsx';
import LessonContentPage from './components/Tutor_Components/Courses/LessonContentPage.jsx';
import CustomerSupportPage from './components/Tutor_Components/customersupport/CustomerSupportPage.jsx';
import CheckoutPage from './components/Courses/CheckoutPage.jsx';
import { useNavigate,Navigate } from 'react-router-dom';
import QuizQuestionPage from './components/Tutor_Components/Courses/Quiz/QuizQuestionPage.jsx';
import PostPage from './components/ForumPosts/PostPage.jsx';

const ProtectedRoute = ({ children, requiredRole }) => {
  
  const navigate = useNavigate();
  const role=localStorage.getItem('role');
  console.log(role)
  if (role === null) {
    return <Navigate to="/login" />; 
  }
  if (role !== requiredRole) {
    return <Navigate to="/login" />; 
  }

  return children;
};

const AppLayout = () => (
  <>
    <div className="fixed top-0 left-0 w-full z-50">
      <NavBar />
    </div>
    <main className="pt-16"> 
      <Outlet />
    </main>
    <Footer />
  </>
);

const NoLayout = () => <Outlet />;

const TutorLayout = () => {
  return (
    <div className='flex h-screen'>
      <div className="flex fixed">
      <Sidebar />
    </div>
    <div className="flex-grow p-6 ml-64 p-6 overflow-auto h-screen">
        <Outlet /> 
      </div>
    </div>
  );
};
const queryClient = new QueryClient();

function App() {

  const router= createBrowserRouter([
    {
      element:<AppLayout/>,
      errorElement:<NotFound/>,
      children:[
        {
          path: "/",
          element: <Landing/>,
        },
        {
          path: "/courses",
          element: <CoursePage/>,
        },
        {
          path: "/Blogs",
          element: <BlogPage/>,
        },
        {
          path: '/blogs/:id',
          element: <BlogDetailPage />,
        },
        {
          path: '/aboutus',
          element: <AboutUsPage />,
        },
        {
          path: '/contactus',
          element: <ContactUsPage />,
        },
        {
          path: '/posts',
          element: <PostPage/>,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
        {
          path: '/profile',
          element: <ProfileScreen />,
        },
        {
          path: '/edit-profile',
          element: <EditProfile />,
        },{
          path: '/change-password',
          element: <ChangePassword />,
        },{
          path: '/learnings',
          element: <MyLearnings />,
        },{
          path: '/course-details/:id',
          element: <CourseDetailsPage />,
        },{
          path: '/payments',
          element: <CheckoutPage />,
        },
        {
          path: '/category',
          element: <CategoriesPage />,
        },
        


      ]

    },
    {
      element: <NoLayout />, // Use the NoLayout component here
      children: [
        { path: "/content/:id", element: <CourseContentPage /> },
      ]
    },
    {
      element:(
        <ProtectedRoute requiredRole='tutor'>
          <TutorLayout />
        </ProtectedRoute>
      ),
      errorElement:<NotFound/>,
      children:[
        {
          path:"/tutor/dashboard",
          element:(
            <ProtectedRoute requiredRole="tutor">
              <TutorDashboard />
            </ProtectedRoute>
          )
        },
        {
          path:"/tutor/courses",
          element:(
            <ProtectedRoute requiredRole="tutor">
              <TutorCourses />
            </ProtectedRoute>
          )
        },
        {
          path:"/tutor/add_courses",
          element:(
            <ProtectedRoute requiredRole="tutor">
              <CourseForm />
            </ProtectedRoute>
          )
        },{
          path: "/tutor/Blogs/view",
          element: (
            <ProtectedRoute requiredRole="tutor">
              <TutorBlogPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/tutor/blogs/:id',
          element:
          (
            <ProtectedRoute requiredRole="tutor">
               <TutorBlogDetailPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/tutor/courses/:courseId/quizzes/:quizId',
          element:
          (
            <ProtectedRoute requiredRole="tutor">
               <QuizQuestionPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/tutor/blogs/add',
          element: <AddBlogPage />,
        }, {
          path: '/tutor/settings',
          element: <SettingsPage />,
        },{
          path: '/tutor/payments',
          element: <PaymentDetailPage />,
        },{
          path: '/tutor/courses/:courseId/lessons',
          element: <LessonListPage />,
        },{
          path: '/tutor/courses/:courseId/lessons/:lessonId',
          element: <LessonContentPage />,
        },
        {
          path: '/tutor/customerSupport',
          element: <CustomerSupportPage />,
        },

      ]
    }

  ]);
 
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App
