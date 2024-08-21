import React from 'react';

const Stage2: React.FC<{ formData: any, onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void, errors: any}> = ({ formData, onChange, errors }) =>  {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Travel Preferences</h2>
      <div>
        <label className="block mb-2 text-gray-800">Departure Date</label>
        <input
          type="date"
          name="departureDate"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
          value={formData.departureDate}
          onChange={onChange}
        />
        {errors.departureDate && <p className="text-red-500">{errors.departureDate}</p>}
      </div>
      <div>
        <label className="block mb-2 text-gray-800">Return Date</label>
        <input
          type="date"
          name="returnDate"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
          value={formData.returnDate}
          onChange={onChange}
        />
        {errors.returnDate && <p className="text-red-500">{errors.returnDate}</p>}
      </div>
      <div>
        <label className="block mb-2 text-gray-800">Accommodation Preference</label>
        <select
          name="accommodation"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
          value={formData.accomodation}
          onChange={onChange}
        >
          <option value="">Select an option</option>
          <option value="Space Hotel">Space Hotel</option>
          <option value="Martian Base">Martian Base</option>
        </select>
        {errors.accomodation && <p className="text-red-500">{errors.accomodation}</p>}
      </div>
      <div>
        <label className="block mb-2 text-gray-800">Special Requests or Preferences</label>
        <textarea
          name="specialRequests"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
          value={formData.specialRequests}
          onChange={onChange}
        />
        {errors.specialRequests && <p className="text-red-500">{errors.specialRequests}</p>}
      </div>
    </div>
  );
};

export default Stage2;