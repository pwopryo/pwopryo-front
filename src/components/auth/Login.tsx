import React, { useState, useEffect } from 'react'
import useLogin from '../../hooks/useLogin';


interface LoginProps {
    isVisible: boolean;
    onClose: () => void;
}


const Login: React.FC<LoginProps> = ({ isVisible, onClose }) => {
    const { email, password, error, setEmail, setPassword, handleLogin } = useLogin();

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(onClose);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);


    if (!isVisible) return null;
    return (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50'>

            <div className='bg-white w-full max-w-md mx-auto p-6 rounded-lg shadow-lg'>
                <div className='text-right'>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none font-bold">
                        X
                    </button>

                </div>
                <h2 className="text-2xl text-gray-500 font-bold mb-6 text-center">Login</h2>
                <div className="">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 mt-8 rounded-xl border"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className='relative'>                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="p-2  rounded-xl border w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                        type='button'
                        onClick={togglePasswordVisibility}
                        >
                            {
                                showPassword ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 fill-current"
                                    viewBox="0 0 16 16">
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 fill-current"
                                    viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                </svg>
                            }
                             </button>
                        </div>


                        <div className="flex justify-end gap-4 items-center">
                            <a href='#' className="text-indigo-600 hover:underline">Forgot password?</a>

                        </div>
                        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                        <button
                            type='submit'
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            Login
                        </button>

                        <p className='text-center'>Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign In</a></p>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login