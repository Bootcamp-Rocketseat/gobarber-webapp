import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    border: 0;
    background: transparent;

    svg {
      color: #999591;
      height: 20px;
      width: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 80px;
  align-items: center;

  img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    margin-right: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 26px;
    margin-left: 16px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  max-width: 1120px;
  margin: 64px auto;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    display: flex;
    color: #ff9000;
    font-weight: 500;
    margin-top: 12px;

    span + span {
      margin-left: 8px;
      padding-left: 8px;
      border-left: 1px solid #ff9000;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 24px;
    background: #3e3b47;
    padding: 16px 24px;
    border-radius: 10px;

    &::before {
      position: absolute;
      content: '';
      background: #ff9000;
      width: 1px;
      height: 80px;
      left: 0;
    }

    strong {
      margin-left: 24px;
      font-size: 24px;
      font-weight: 500;
      color: #fff;
    }

    span {
      display: flex;
      align-items: center;
      margin-left: auto;
      color: #999591;
      font-size: 20px;

      svg {
        margin-right: 12px;
        height: 20px;
        width: 20px;
        color: #ff9000;
      }
    }
  }

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
`;

export const Calendar = styled.aside`
  width: 360px;
`;
