import React, { useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

const App = () => {

  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {
    if(email=='admin@react.com' && password=='1234'){
      setUser('admin')
    }else if(email=='user@react.com' && password=='abc'){
      setUser('employee')
    }
    else{
      alert("Invalid Credentials!")
    }
  }

  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}
    {user == 'admin' && <AdminDashboard />}
    {user == 'employee' && <EmployeeDashboard />}
    </>
  )
}

export default App