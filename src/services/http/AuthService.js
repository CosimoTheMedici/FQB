import React from 'react'
import useAuth from '../../hooks/useAuth'

const AuthService = () => {
    const {auth} = useAuth()
  return auth.accessToken
}

export default AuthService