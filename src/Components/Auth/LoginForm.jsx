/** @format */

import { useState } from 'react';
import ImageLeft from '../../Assets/images/paint.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { APIsRequestService } from '../../Services/APIsRequestService';
import { ToastContainer, toast } from 'react-toastify';
import { encrypt } from '../../Utils/SharedUtils';
import Spinner from '../Shared/Loader';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const selectedService = localStorage.getItem('SELECTED-SERVICE');

    try {
      const response = await APIsRequestService.SignInAPI({ email: username, password });
      const data = await response.json();
         
      if (!response.ok) {
        setLoading(false);
      
        return toast.error(data.message|| data.error || 'Login failed');
      }

      localStorage.setItem('token', encrypt(data.data.token));
      localStorage.setItem("IS_LOGGED-IN", true);
      toast.success(data.message || 'Login successful!');

      setTimeout(() => {
        try {
          if (selectedService) {
            const serviceData = JSON.parse(selectedService);
            const slugName = serviceData.name.toLowerCase().replace(/\s+/g, '-');
            navigate(`/confirm-booking/${slugName}`, { state: serviceData });
          } else {
            navigate('/dashboard');
          }
        } catch (error) {
          console.error('Navigation error:', error);
        }
      }, 1000);
    } catch (error) {
      setLoading(false);
      toast.error('An unexpected error occurred. Please try again.');
      console.error('Failed Error:', error);
    }
  };
  
  return (
    <div className='relative w-full h-screen flex items-center justify-center '>
      <ToastContainer />
      <div className='bg-white w-[90%] max-w-[850px] rounded-2xl shadow-2xl overflow-hidden'>
        <div className='hidden md:flex justify-center py-6 bg-white'>
          <h2 className='text-2xl font-bold text-center'>Community Service</h2>
        </div>

        <div className='flex justify-center'>
          <div className='hidden md:flex w-1/2 items-center justify-center'>
            <img
              src={ImageLeft}
              alt='Illustration'
              className='w-[280px]'
            />
          </div>

          <div className='w-2/3 md:w-1/2 p-8 md:p-10 flex flex-col justify-center '>
            <div className='hidden md:flex w-[2px] h-[300px] absolute bg-gray-300 z-10 ml-[-80px]'>
              {' '}
            </div>

            <div className='flex md:hidden justify-center mb-6'>
              <h2 className='text-2xl font-bold text-center'>
                Community Service
              </h2>
            </div>

            <div className='flex justify-center gap-20 mb-6 font-semibold'>
              <span className='text-secondary  border-b-2 border-secondary  pb-1 cursor-pointer'>
                Login
              </span>
              <div className='w-[2px] h-[20px] absolute bg-gray-300 z-10 ml-[-20px] '>
                {' '}
              </div>
              <Link
                to='/register'
                className='text-gray-500 cursor-pointer'
              >
                {' '}
                Register{' '}
              </Link>
            </div>

            <form
              className='flex flex-col gap-4'
              onSubmit={handleLogin}
            >
              <div>
                <input
                  type='email'
                  placeholder='Email'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-blue-500'
                  required
                />
              </div>

              <div>
                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-blue-500'
                    required
                  />

                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-2.5 text-gray-500'
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className='flex items-center gap-2 text-sm'>
                <input type='checkbox' />
                <span>Remember</span>
              </div>

              <p className="text-sm text-gray-500">
                Forgot your password ?{" "}
                <Link to="/forgot-password"  className="text-secondary  cursor-pointer font-medium">
                  Click here
                </Link>
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-secondary text-white py-2 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Spinner size={16} color="#ffffff" />
                    <span>Logging in...</span>
                  </>
                ) : (
                  <span>Login</span>
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;