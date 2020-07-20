import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;

  border-radius: 10px;
  border: 2px solid #232129;

  color: #666360;

  width: 100%;
  padding: 16px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;

    color: #f4ede8;

    flex: 1;

    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
