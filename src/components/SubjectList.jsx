import React from 'react';

function SubjectList({ subjects, toggleComplete, deleteSubject }) {
  return (
    <ul>
      {subjects.map((subject) => (
        <li key={subject.id}>
          <input
            type="checkbox"
            checked={subject.completed}
            onChange={() => toggleComplete(subject.id)}
          />
          <span style={{ textDecoration: subject.completed ? 'line-through' : 'none' }}>
            {subject.name} - Deadline: {subject.deadline}
          </span>
          <button onClick={() => deleteSubject(subject.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default SubjectList;
