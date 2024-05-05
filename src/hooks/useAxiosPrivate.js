import axios from 'axios';
import {  useEffect} from 'react'
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';
import { axiosInstance } from '../services/axios/axios';




const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        //console.log("herdde",auth.accessToken)
        const requestIntercept = axiosInstance.interceptors.request.use(
            (config) => {
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }

                return config;
            }, (error)=> {Promise.reject(error);
              console.log("error",error);
            }
        );
      
        const responseIntercept = axiosInstance.interceptors.response.use(
            response => response,
            async(error)=>{
                const prevRequest = error?.config;
                if(error?.response?.status === 403 && !prevRequest?.sent){
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    console.log("newAccessToken  runs",newAccessToken)
                    prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axiosInstance(prevRequest);
                }
                if(error?.response?.status === 401 && !prevRequest?.sent){
console.log("this is the eerror supposed to log you out ")

                }
                if(error?.response?.status === 404 && !prevRequest?.sent){
console.log("this is the error not found")

                }
                return Promise.reject(error);
            }
        );
        return () => {
            axiosInstance.interceptors.request.eject(requestIntercept);
            axiosInstance.interceptors.response.eject(responseIntercept);
        }
    
    }, [auth , refresh])

    
  return axiosInstance
}



export default useAxiosPrivate