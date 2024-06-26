
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = ({ setData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fields, setFields] = useState([{ courseName: '', university: '',year:null}]);
  const navigate = useNavigate();

  const handleInputChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleAddField = () => {
    setFields([...fields, { courseName: '', university: '',year:'' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      fields,
    };
    setData(formData);
    navigate('/page2')
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin:'10%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'6px' }}>
      <h1>Form</h1>
      <div style={{margin:'2px'}}>
      <input
      style={{margin:'2px'}}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
      style={{margin:'2px'}}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>

      {fields.map((field, index) => (
        <div key={index} style={{margin:'2px'}}>
          <input
          style={{margin:'2px'}}
            type="text"
            placeholder="Course name"
            value={field.courseName}
            onChange={(e) => handleInputChange(index, 'courseName', e.target.value)}
          />
          <input
          style={{margin:'2px'}}
            type="text"
            placeholder="University"
            value={field.university}
            onChange={(e) => handleInputChange(index, 'university', e.target.value)}
          />
          
          <input
          style={{margin:'2px'}}
            type="number"
            placeholder="Year"
            value={field.year}
            onChange={(e) => handleInputChange(index, 'year', e.target.value)}
          />
          <button onClick={() => handleRemoveField(index)}>X</button>
        </div>
      ))}
      <button type="button" style={{margin:'4px',paddingLeft:'5px',paddingRight:"5px"}} onClick={handleAddField}>+</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPage;


