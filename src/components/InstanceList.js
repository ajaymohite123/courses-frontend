import React, { useState, useEffect } from 'react';
import { getInstances } from '../services/api';

const InstanceList = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [instances, setInstances] = useState([]);

  const handleFetchInstances = async () => {
    const response = await getInstances(year, semester);
    setInstances(response.data);
  };

  return (
    <div>
      <h1>Course Instances</h1>
      <div>
        <label>Year</label>
        <input 
          type="text" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
        />
        <label>Semester</label>
        <input 
          type="text" 
          value={semester} 
          onChange={(e) => setSemester(e.target.value)} 
        />
        <button onClick={handleFetchInstances}>Fetch Instances</button>
      </div>
      <ul>
        {instances.map(instance => (
          <li key={instance.id}>
            {instance.year} - Semester {instance.semester}: {instance.course.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstanceList;
