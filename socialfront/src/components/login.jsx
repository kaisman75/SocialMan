import React from 'react'
import GoogleLogin from 'react-google-login'
import  {FcGoogle} from 'react-icons/fc'
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
          <div className='absolute w-full h-full flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay'>
            
                  <img src="./Asets/s1.png" alt="" />
                    <div className='mt-10'>
                      <button 
                       type="button"
                       className='flex flex-row'
                       >
                      <FcGoogle className='mr-4'/>login with google
                      </button>
                      </div>
             
          </div>
        </div>
    )
}

export default Login
