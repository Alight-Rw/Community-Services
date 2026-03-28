/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { APIsRequestService } from '../../Services/APIsRequestService';
import { encrypt } from '../../Utils/SharedUtils';
import Spinner from '../Shared/Loader';

export function ProviderLoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
       setLoading(true);
    try {
      const response = await APIsRequestService.SignInAPI({
        email: username,
        password,
      });
      const data = await response.json();

      if (!response.ok) {
          setLoading(false);
        return toast.error(data.message);
      }
      toast.success(data.message);
      setTimeout(() => {
        localStorage.setItem('token', encrypt(data.data.token));
        if (data.data.userType === 'provider') {
          return navigate('/provider-dashboard');
        }

        return toast.error('Invalid email or password');
      }, 2000);
    } catch (error) {
        setLoading(false);
      console.error('Failed Error:', error);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-10'>
      <ToastContainer />
      <form
        onSubmit={handleLogin}
        className='bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md md:max-w-lg space-y-8'
      >
        <h2 className='text-xl sm:text-2xl font-bold text-center'>
          Provider Panel
        </h2>

        <h2 className='font-bold text-xl sm:text-2xl underline decoration-secondary'>
          Login
        </h2>

        <input
          type='text'
          placeholder='Username'
          className='border rounded-lg px-4 py-2 w-full'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            className='border rounded-lg px-4 py-2 w-full pr-10'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-600'
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50"
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
  );
}