import React from 'react';

const Stage3: React.FC<{ formData: any, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void, errors: any }> = ({ formData, onChange, errors }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Health and Safety</h2>
      
      <div>
        <label className="block mb-2 text-gray-800">Health Declaration</label>
        <select
          name="healthDeclaration"
          className="w-full p-2 border border-gray-300 rounded text-gray-900"
          value={formData.healthDeclaration}
          onChange={onChange}
        >
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        {errors.healthDeclaration && <p className="text-red-500">{errors.healthDeclaration}</p>}
      </div>
      
      <div>
        <label className="block mb-2 text-gray-800">Emergency Contact Information</label>
        <input
          type="text"
          name="emergencyContact"
          className="w-full p-2 border border-gray-300 rounded text-gray-900"
          value={formData.emergencyContact}
          onChange={onChange}
        />
        {errors.emergencyContact && <p className="text-red-500">{errors.emergencyContact}</p>}
      </div>
      
      <div>
        <label className="block mb-2 text-gray-800">Any Medical Conditions</label>
        <textarea
          name="medicalConditions"
          className="w-full p-2 border border-gray-300 rounded text-gray-900"
          value={formData.medicalConditions}
          onChange={onChange}
        />
        {errors.medicalConditions && <p className="text-red-500">{errors.medicalConditions}</p>}
      </div>
    </div>
  );
};

export default Stage3;