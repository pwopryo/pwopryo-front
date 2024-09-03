import { useState } from "react";


// interface LoginResponse {
//     data: {
//         user: {
//             id: string;
//             email: string;
//             fullName: string;
//             // Add other user properties as needed
//         };
//         avatarUploadUrl: string | null;
//     }
// }

const useLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string>('');

    const handleLogin = async (onClose: ()=>void) => {
      

        try {
            const response = await fetch('http://localhost:3333/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || 'Invalid email or password.');
                return;
            }

            console.log('Login attempt with', { email, password });

            // const data: LoginResponse = await response.json();
            const data = await response.json();
           
            localStorage.setItem('user', JSON.stringify(data.data.user));
            onClose();

        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again.');
        }
    };


    return {
        email,
        password,
        error,
        setEmail,
        setPassword,
        handleLogin,
    }

}

export default useLogin