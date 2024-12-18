import React, { useState } from 'react';
import styled from 'styled-components';
import { AuthContainer, AuthInput, AuthButton } from '../styles/AuthStyles';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    // Handle signup logic
  };

  return (
    <AuthContainer>
      <h1>Projektio</h1>
      <AuthInput
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <AuthInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthButton onClick={handleSignup}>Continue</AuthButton>
    </AuthContainer>
  );
};

export default Signup;