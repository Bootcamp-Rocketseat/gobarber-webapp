import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  background: #ff9000;
  height: 56px;
  width: 100%;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  font-weight: 500;
  margin-top: 24px;
  transition: background-color 0.2s;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

export const Loader = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #312e38;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1.2s linear infinite;
`;
