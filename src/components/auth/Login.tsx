import React, { useEffect } from 'react'
import useLogin from '../../hooks/useLogin';


interface LoginProps {
    isVisible: boolean;
    onClose: () => void;
}


const Login: React.FC<LoginProps> = ({ isVisible, onClose }) => {
    const { email, password, error, setEmail, setPassword, handleLogin } = useLogin();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin(onClose);
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
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-2  rounded-xl border w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
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