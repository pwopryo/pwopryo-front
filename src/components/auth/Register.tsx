import React, { useState, useEffect } from 'react'
import PersonalInfo from './register/PersonalInfo';
import PasswordSetup from './register/PasswordSetup';
import AvatarUpload from './register/AvatarUpload';
import Confirmation from './register/Confirmation';
import '../../style.css'


interface RegisterProps {
    isVisible: boolean;
    onClose: () => void;
}

const Register: React.FC<RegisterProps> = ({ isVisible, onClose }) => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        avatar: null as File | null,
        phoneNumber: '',
    });

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = () => {
        console.log('Form Submitted', formData);

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
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-lg mx-auto p-6 rounded-lg shadow-lg">
            <div className="text-right">
                <button
                    className="text-gray-500 hover:text-gray-700 focus:outline-none font-bold"
                    onClick={onClose}
                >
                    X
                </button>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">
                {step === 4 ? 'Review & Confirm' : 'Create an Account'}
            </h2>

            <div className="space-y-6">
                {step === 1 && <PersonalInfo formData={formData} setFormData={setFormData} />}
                {step === 2 && <PasswordSetup formData={formData} setFormData={setFormData} />}
                {step === 3 && <AvatarUpload formData={formData} setFormData={setFormData} />}
                {step === 4 && <Confirmation formData={formData} />}

                <div className="flex justify-between">
                    {step > 1 && (
                        <button
                            onClick={prevStep}
                            className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            Back
                        </button>
                    )}
                    {step < 4 && (
                        <button
                            onClick={nextStep}
                            className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 ml-auto"
                        >
                            Next
                        </button>
                    )}
                    {step === 4 && (
                        <button
                            onClick={handleSubmit}
                            className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 ml-auto"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register