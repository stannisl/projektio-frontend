import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #292929;
  color: white;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
`;

const BoardCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Card>
      <h3>{title}</h3>
    </Card>
  );
};

export default BoardCard;