import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import CreateCourse from './components/CreateCourse';
import InstanceList from './components/InstanceList';
import InstanceDetails from './components/InstanceDetails';
import CreateInstance from './components/CreateInstance';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/instances" element={<InstanceList />} />
          <Route path="/instance/:year/:semester/:id" element={<InstanceDetails />} />
          <Route path="/create-instance" element={<CreateInstance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
