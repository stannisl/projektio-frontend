import React from 'react';
import styled from 'styled-components';
import BoardCard from './BoardCard';

const BoardContainer = styled.div`
  padding: 20px;
`;

const BoardPage: React.FC = () => {
  const boards = ['Kotlin FullStack Developer', 'KFD-board'];

  return (
    <BoardContainer>
      <h1>My Boards</h1>
      {boards.map((board, index) => (
        <BoardCard key={index} title={board} />
      ))}
    </BoardContainer>
  );
};

export default BoardPage;