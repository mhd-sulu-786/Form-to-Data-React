import React from 'react';

const Page2 = ({ data }) => {
  return (
    <div>
      <h1>Data from Form</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>

      <ul>
        {data.fields.map((field, index) => (
          <li key={index}>
            Course Name: {field.courseName}, University: {field.university},Year{field.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page2;