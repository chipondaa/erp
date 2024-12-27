
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom'



import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from './pages/Home'









import Pupils_list from './pages/Pupils_list'

import Pupils from './pages/Pupils'







function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}


export default function App() {
  return (
    <Router>

<div className="flex h-screen bg-gray-100">
        
        <div className="flex flex-col flex-1 overflow-hidden">
       
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-6">
          <Routes>
        

<Route
          path="/pupils"
          element={
            <ProtectedRoute>
              <Pupils_list/>
             
            </ProtectedRoute>
          }
        />
         





<Route
          path="/add"
          element={
            <ProtectedRoute>
              <Pupils/>
             
            </ProtectedRoute>
          }
        />




       

              
              <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
            
            
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
            </Routes>
           
          </main>
          
        </div>
      </div>
    </Router>
      
    
  )
}