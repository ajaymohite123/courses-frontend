import React, { useState } from 'react';
import { createInstance } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreateInstance = () => {
  const [courseId, setCourseId] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newInstance = {
      course_id: courseId,
      year,
      semester,
    };
    await createInstance(newInstance);
    navigate('/instances');
  };

  return (
    <div>
      <h1>Create New Course Instance</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course ID</label>
          <input 
            type="text" 
            value={courseId} 
            onChange={(e) => setCourseId(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Year</label>
          <input 
            type="text" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Semester</label>
          <input 
            type="text" 
            value={semester} 
            onChange={(e) => setSemester(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateInstance;
