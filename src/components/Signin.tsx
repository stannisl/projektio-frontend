import React, { useState } from 'react';
import styled from 'styled-components';
import { AuthContainer, AuthInput, AuthButton } from '../styles/AuthStyles';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  // Full viewport height
  background-color: #0d0d0d;  // Background color to match your design
`;

const Signin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    // Handle sign-in logic
  };

  return (
    <CenteredContainer>
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
    </CenteredContainer>
  );
};

export default Signin;