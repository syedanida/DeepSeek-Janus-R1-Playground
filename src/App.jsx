import React, { useState, useEffect } from 'react';
import SubjectList from './components/SubjectList';
import SubjectForm from './components/SubjectForm';
import StudySchedule from './components/StudySchedule';

function App() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const savedSubjects = JSON.parse(localStorage.getItem('subjects') || '[]');
    setSubjects(savedSubjects);
  }, []);

  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);

  const addSubject = (newSubject) => {
    setSubjects([...subjects, { ...newSubject, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, completed: !subject.completed } : subject
      )
    );
  };
    
  const deleteSubject = (id) => {
      setSubjects(subjects.filter(subject => subject.id !== id));
  }

  return (
    <div className="container">
      <h1>Study Planner</h1>
      <SubjectForm addSubject={addSubject} />
      <SubjectList subjects={subjects} toggleComplete={toggleComplete} deleteSubject={deleteSubject}/>
      <StudySchedule subjects={subjects} />
    </div>
  );
}

export default App;
