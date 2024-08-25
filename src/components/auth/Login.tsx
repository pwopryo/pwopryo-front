import React, { useState, useEffect } from 'react'
import '../../style.css'


interface LoginProps {
    isVisible: boolean;
    onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ isVisible, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login attempt with', { email, password });
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
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="">
                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 mt-8 rounded-xl border"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-2  rounded-xl border w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={handleLogin}
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login