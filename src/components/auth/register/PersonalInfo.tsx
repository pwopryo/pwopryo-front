import React from 'react'


interface PersonalInfoProps {
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ formData, setFormData }) => {
    return (
        <div><h2>Personal Info</h2>
            <form className="flex flex-col gap-4">
                <input type="text"
                    className="p-2 mt-8 rounded-xl border"
                    value={formData.fullName}
                    placeholder='Fullname'
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <input type="email"
                    value={formData.email}
                    placeholder='Email'
                     className="p-2 mt-2 rounded-xl border"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                     className="p-2 mt-2 rounded-xl border w-full"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
            </form>
        </div>
    )
}

export default PersonalInfo