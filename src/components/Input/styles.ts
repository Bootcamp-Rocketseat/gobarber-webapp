import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #232129;
  border-radius: 10px;
  border: 2px #232129;
  padding: 16px;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    border: 0;
    width: 100%;
    color: #f4ede8;

    ::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 20px;
  }
`;
