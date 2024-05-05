import React from 'react'
import useAuth from './useAuth';
import { axiosPublic } from '../services/axios/axios';
import { jwtDecode } from 'jwt-decode';


const useRefreshToken = () => {
     const { setAuth } = useAuth();
     const refresh = async () => {
       
      //   const {data} = await axiosPublic.get(`/api/v1/auth/refresh/token`,
      //   {
      //    withCredentials: true,
      //  });
        //var decoded = jwtDecode(data.accessToken);
        let data = localStorage.getItem('token')
        var decoded = jwtDecode(localStorage.getItem('token'));
        //console.log("decoded decoded",decoded)
        
        //setAuth({user:email,roles:cat,accessToken:fetchLoginResponses.accessToken})

        //setAuth({user:decoded.email,roles:decoded.role,access:fetchLoginResponses.access})

        setAuth(prev =>{
            console.log("JSON.stringify(prev)",JSON.stringify(prev));
            //console.log("data.accessToken",data.accessToken);
           

            return{...prev,accessToken:localStorage.getItem('token'),user:decoded.email,roles:decoded.role}
        });
        return data;
     }
  return refresh
}

export default useRefreshToken