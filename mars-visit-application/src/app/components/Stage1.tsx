import React from 'react';

const Stage1: React.FC<{ formData: any, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, errors: any }> = ({ formData, onChange, errors }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
      <div>
        <label className="block mb-2 text-gray-800">Full Name</label>
        <input
          type="text"
          name="fullName"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
          value={formData.fullName}
          onChange={onChange}
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
      </div>
      <div>
        <label className="block mb-2 text-gray-800">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
          value={formData.dateOfBirth}
          onChange={onChange}
        />
        {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth}</p>}
      </div>
      <div>
        <label className="block mb-2 text-gray-800">Nationality</label>
        <input
          type="text"
          name="nationality"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
          value={formData.nationality}
          onChange={onChange}
        />
        {errors.nationality && <p className="text-red-500">{errors.nationality}</p>}
      </div>
      <div>
        <label className="block mb-2 text-gray-800">Email</label>
        <input
          type="text"
          name="email"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
          value={formData.email}
          onChange={onChange}
          placeholder="example@email.com"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label className="block mb-2 text-gray-800">Phone Number</label>
        <input
          type="text"
          name="phone"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
          value={formData.phone}
          onChange={onChange}
          placeholder="1234567890" 
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default Stage1;