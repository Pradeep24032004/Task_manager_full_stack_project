// client/src/components/SignUp.js
/*import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const newUser = { name, email, password };
    try {
      const res = await axios.post('http://localhost:5000/register', newUser);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" />
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
      <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
      <button type="submit">Sign Up</button>
      <a href="http://localhost:5000/api/auth/google">Sign Up with Google</a>
    </form>
  );
};

export default SignUp;*/
// client/src/components/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);

  const { name, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const newUser = { name, email, password };
    try {
      const res = await axios.post('http://localhost:5000/register', newUser);
      console.log(res.data);
      navigate("/signin");
      // Handle successful response
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.msg); // assuming the error response has a 'msg' property
      } else {
        setError('An unexpected error occurred');
      }
    }
  };
  function handleClick(){
    navigate("/signin");
  }
  return (
    <div className="container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" />
          <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
          <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
          <button type="submit">Sign Up</button><br/>
          <button onClick={handleClick}>SignIn</button>
          
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>  
    </div>
  );
};

export default SignUp;

/*<div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
        <button type="submit">Sign Up</button>
        <a href="http://localhost:5000/api/auth/google">Sign Up with Google</a>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>*/