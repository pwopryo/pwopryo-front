import React from 'react'

interface AvatarUploadProps {
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
}


const AvatarUpload: React.FC<AvatarUploadProps> = ({ formData, setFormData }) => {

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, avatar: e.target.files[0] });
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl text-gray-500 font-bold text-center">Upload Avatar</h2>
            <div className="flex flex-col items-center justify-center mt-4">
                <label className="cursor-pointer mb-4 flex flex-col items-center">
                    <span className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-500">
                        Choose File
                    </span>
                    <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
                {formData.avatar && (
                    <div className="mt-4">
                        <p className="text-sm text-gray-600">Selected file: {formData.avatar.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AvatarUpload