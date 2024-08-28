import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInstanceDetails } from '../services/api';

const InstanceDetails = () => {
  const { year, semester, id } = useParams();
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    const fetchInstanceDetails = async () => {
      const response = await getInstanceDetails(year, semester, id);
      setInstance(response.data);
    };
    fetchInstanceDetails();
  }, [year, semester, id]);

  if (!instance) return <div>Loading...</div>;

  return (
    <div>
      <h1>{instance.course.title} - {year} Semester {semester}</h1>
      <p>{instance.course.description}</p>
    </div>
  );
};

export default InstanceDetails;
