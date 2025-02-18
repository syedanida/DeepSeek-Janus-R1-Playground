import React from 'react';

function StudySchedule({ subjects }) {
  // Basic schedule generation - can be improved
  const schedule = subjects.map((subject) => (
    <div key={subject.id}>
      Study {subject.name} before {subject.deadline}
    </div>
  ));

  return <div><h2>Study Schedule</h2>{schedule}</div>;
}

export default StudySchedule;
