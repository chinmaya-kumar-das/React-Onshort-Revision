import React, { useState } from 'react';

const FormNeta = ({ addPolitician }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    state: "",
    url: "",
    id: ""
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addPolitician(formData); // Assuming addPolitician function is defined elsewhere
    // Reset the form after submission
    setFormData({
      name: "",
      age: "",
      state: "",
      url: "",
      id: ""
    });
  };

  return (
    <div className='px-2 py-2'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-2 w-[200px]'>
        <input type='number' name="id" value={formData.id} onChange={handleChange} placeholder='Enter Neta ID' />
        <input type='text' name="name" value={formData.name} onChange={handleChange} placeholder='Enter Neta Name' />
        <input type='text' name="state" value={formData.state} onChange={handleChange} placeholder='Enter Neta state' />
        <input type='number' name="age" value={formData.age} onChange={handleChange} placeholder='Enter Neta Age' />
        <input type='url' name="url" value={formData.url} onChange={handleChange} placeholder='Enter url' />
        <button className='bg-red-600 w-[40%]' type='submit'>Add</button>
      </form>
    </div>
  );
};

export default FormNeta;
