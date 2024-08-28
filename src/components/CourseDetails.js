import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseDetails } from '../services/api';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const response = await getCourseDetails(id);
      setCourse(response.data);
    };
    fetchCourseDetails();
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetails;
