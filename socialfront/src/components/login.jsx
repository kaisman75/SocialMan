import React from 'react'
import GoogleLogin from 'react-google-login'
import FcGoogle from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import shareVideo from '../components/Asets/00005.mp4'
const Login = () => {
    return (
        <div className='flex justify-start item-center flex-col h-screen'>
          <div className='relative w-full h-full'>
              <video
              src={shareVideo}
              type='video/mp4'
              loop
              controls={false}
              muted
              autoPlay={true}
              className='w-full h-full object-cover'
              />
              <div className='absolute flex flex-col justify-center items-center bg-blackOverlay top-0 right-0 bottom-0 left-0'></div>
          </div>
        </div>
    )
}

export default Login
