import axios from 'axios';

const API_URL = 'http://10.0.2.2:8000/api'; // Replace with your backend URL

export const getCourses = async () => {
  return await axios.get(`${API_URL}/courses`);
};


export const getCourseDetails = async (id) => {
  return await axios.get(`${API_URL}/courses/${id}`);
};

export const createCourse = async (courseData) => {
  return await axios.post(`${API_URL}/courses`, courseData);
};

export const getInstances = async (year, semester) => {
  return await axios.get(`${API_URL}/instances/${year}/${semester}`);
};

export const getInstanceDetails = async (year, semester, id) => {
  return await axios.get(`${API_URL}/instances/${year}/${semester}/${id}`);
};

export const createInstance = async (instanceData) => {
  return await axios.post(`${API_URL}/instances`, instanceData);
};

