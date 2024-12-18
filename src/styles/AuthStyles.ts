import styled from 'styled-components';

export const AuthContainer = styled.div`
  background-color: #292929;  // Background color for the auth form
  color: white;
  padding: 40px;  // Adjust padding as needed
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);  // Optional for depth
`;

export const AuthInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background: #1a1a1a;
  color: white;
`;

export const AuthButton = styled.button`
  background: #0070f3;  // Adjust button color
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;