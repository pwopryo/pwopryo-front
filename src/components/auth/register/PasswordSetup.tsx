import React from 'react'



interface PasswordSetupProps {
    formData: {
        password: string;
        confirmPassword: string;
    };
    setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const PasswordSetup: React.FC<PasswordSetupProps> = ({ formData, setFormData }) => {
    return (
        <div>
            <h2 className='text-2xl text-gray-500 font-bold'>Password Setup</h2>
            <form className="flex flex-col gap-4">
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 mt-8 rounded-xl border"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="p-2 mt-2 rounded-xl border w-full"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
            </form>
        </div>
    )
}

export default PasswordSetup