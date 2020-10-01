import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  > header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;

      margin: 0 auto;

      svg {
        color: #999591;

        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;

  margin: -176px auto 0;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;

      font-size: 20px;
      text-align: left;
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

    input[name='old_password'] {
      margin-top: 24px;
    }
  }
`;

export const AvatarInput = styled.div`
  width: 186px;

  position: relative;
  margin: 0 auto 32px;

  img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  label {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 48px;
    height: 48px;

    background: #ff9000;

    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: background-color 0.3s;

    &:hover {
      background-color: ${shade(0.2, '#ff9000')};
    }

    svg {
      width: 20px;
      height: 20px;

      color: #312e38;
    }

    input {
      display: none;
    }
  }
`;
