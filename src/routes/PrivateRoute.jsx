import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    if(loading){
        return <p>Loading...</p>
    }
    const location=useLocation()
    if(user){
        return children
    }

  return <Navigate to="/login" state={{from:location}}></Navigate>
}

export default PrivateRoute