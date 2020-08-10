import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;

  border-radius: 10px;
  border: 0;

  padding: 16px;
  margin-top: 16px;

  height: 56px;
  width: 100%;

  color: #312e38;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
