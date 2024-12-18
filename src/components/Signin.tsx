import React, { useState } from 'react';
import styled from 'styled-components';
import { AuthContainer, AuthInput, AuthButton } from '../styles/AuthStyles';

const Signin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    // Handle sign-in logic
  };

  return (
    <AuthContainer>
      <h1>Projektio</h1>
      <AuthInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <AuthButton onClick={handleSignin}>Continue</AuthButton>
    </AuthContainer>
  );
};

export default Signin;