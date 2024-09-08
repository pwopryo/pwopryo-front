import React from 'react'


interface ConfirmationProps {
    formData: any;
}


const Confirmation: React.FC<ConfirmationProps> = ({ formData }) => {
    return (
        <div className="p-6">
        {/* <h2 className="text-2xl font-semibold text-gray-500 mb-4 text-center">Confirm Your Details</h2> */}
        <div className="space-y-4">
            <p className="text-lg"><span className="font-medium">Full Name:</span> {formData.fullName}</p>
            <p className="text-lg"><span className="font-medium">Email:</span> {formData.email}</p>
            <p className="text-lg"><span className="font-medium">Phone Number:</span> {formData.phoneNumber}</p>
            {formData.avatar && (
                <div className="mt-4">
                    <p className="text-lg"><span className="font-medium">Avatar:</span> {formData.avatar.name}</p>
                    <img 
                        src={URL.createObjectURL(formData.avatar)} 
                        alt="Avatar Preview" 
                        className="mt-2 w-24 h-24 rounded-full object-cover shadow-lg" 
                    />
                </div>
            )}
        </div>
    </div>
    )
}

export default Confirmation