"use client";

import React, { useState } from 'react';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';

const initialFormData = {
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    accommodation: '',
    specialRequests: '',
    healthDeclaration: '',
    emergencyContact: '',
    medicalConditions: '',
  };

const MultiStageForm: React.FC = () => {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (currentStage: number) => {
    const newErrors: { [key: string]: string } = {};

    if (currentStage === 1) {
        if (!formData.fullName) newErrors.fullName = 'Full Name is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';
        if (!formData.nationality) newErrors.nationality = 'Nationality is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
         }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
             } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }
    }

    if (currentStage === 2) {
        if (!formData.departureDate) newErrors.departureDate = 'Departure Date is required';
        if (!formData.returnDate) newErrors.returnDate = 'Return Date is required';
        if (!formData.accommodation) newErrors.accommodation = 'Accommodation preference is required';
        if (!formData.specialRequests) newErrors.specialRequests = 'Enter n/a if there are no special requests';
    }

    if (currentStage === 3) {
        if (!formData.healthDeclaration) newErrors.healthDeclaration = 'Health Declaration is required';
        if (!formData.emergencyContact) newErrors.emergencyContact = 'Emergency Contact is required';
        if (!formData.medicalConditions) newErrors.medicalConditions = 'Enter n/a if there are no special medical conditions';
    }

    return newErrors;
  };

  const nextStage = () => {
    const newErrors = validateForm(stage);
    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      setStage(stage + 1);
    } else {
      setErrors(newErrors);
    }
  };

  const prevStage = () => setStage(stage - 1);

  const handleSubmit = () => {
    const newErrors = validateForm(stage);

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
      setFormData(initialFormData);  
      setStage(1);  
    } else {
      setErrors(newErrors);
    }
  };


  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-red-500 text-white text-center py-4 rounded">
        <h1 className="text-2xl font-bold">Mars Application Form</h1>
      </div>

      {stage === 1 && <Stage1 formData={formData} onChange={handleChange} errors={errors} />}
      {stage === 2 && <Stage2 formData={formData} onChange={handleChange} errors={errors} />}
      {stage === 3 && <Stage3 formData={formData} onChange={handleChange} errors={errors} />}

      <div className="mt-4 space-x-4">
        {stage > 1 && <button onClick={prevStage} className="px-4 py-2 bg-gray-500 text-white rounded">Back</button>}
        {stage < 3 && <button onClick={nextStage} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>}
        {stage === 3 && <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>}
      </div>
    </div>
  );
};

export default MultiStageForm;