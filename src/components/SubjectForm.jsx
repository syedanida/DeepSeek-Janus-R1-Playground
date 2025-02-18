import React, { useState } from 'react';

function SubjectForm({ addSubject }) {
  const [subjectName, setSubjectName] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subjectName || !deadline) return;
    addSubject({ name: subjectName, deadline });
    setSubjectName('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Subject Name"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Subject</button>
    </form>
  );
}

export default SubjectForm;
