import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
// pages & components
import TeacherCourses from './pages/teacher/courses'
import StudentCourses from './pages/student/courses'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import Navbaar from './components/navbar'
import TeacherActivities from './pages/teacher/activities'
import ActivityViewer from './pages/teacher/viewActivity'

function App() {
  
  const { user } = useAuthContext()
  const { roles } = {...user}
  if(roles){
    var role = roles[0]
    console.log(role )
  }
   

  return (
    <div className="App">
    <BrowserRouter>
    <Navbaar />
       
      <div className="pages">
        <Routes>
          <Route 
              path="/"
              element={<Navigate to="/Login" />}
          />

          <Route 
            path="/login" 
            element={!user ? <Login /> : role==="ROLE_TEACHER"? <Navigate to="/teacherCourses"/>
            : <Navigate to="/allCourses"/> }
          />
          <Route 
            path="/signup" 
            element={!user ? <Signup /> : role==="ROLE_TEACHER"? <Navigate to="/teacherCourses"/>
            : <Navigate to="/allCourses"/> }
          />
       
          <Route 
            path="/allCourses"
            element={!user ? <Login /> : role==="ROLE_STUDENT"? <StudentCourses/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/teacherCourses"
            element={!user ? <Login /> : role==="ROLE_TEACHER"? <TeacherCourses/> : <Navigate to="/Login" />}
          />

          <Route 
            path="/courseActivities"
            element={!user ? <Login /> : (role==="ROLE_TEACHER" || role==="ROLE_STUDENT")? <TeacherActivities/> : <Navigate to="/Login" />}
           />

          <Route 
            path="/viewActivity"
            element={!user ? <Login /> : (role==="ROLE_TEACHER" || role==="ROLE_STUDENT")? <ActivityViewer/> : <Navigate to="/Login" />}
          />

        </Routes>
      </div>
    </BrowserRouter>
  </div> 
  );
}

export default App;
