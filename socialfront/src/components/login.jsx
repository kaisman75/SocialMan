import React from 'react'
import GoogleLogin from 'react-google-login'
import FcGoogle from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import shareVideo from '../components/Asets/share.mp4'
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
          </div>
        </div>
    )
}

export default Login
