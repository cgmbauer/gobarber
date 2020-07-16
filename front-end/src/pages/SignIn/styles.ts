import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;

      color: #f4ede8;

      border-radius: 10px;
      border: 2px solid #232129;

      /* padding: 16px; */
      width: 100%;
      height: 56px;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
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
    }

    a {
      color: #f4ede8;
      text-decoration: none;

      display: block;
      margin-top: 24px;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;

    display: block;
    margin-top: 24px;

    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
