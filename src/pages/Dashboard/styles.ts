import { shade } from 'polished';
import styled from 'styled-components';

import ArrowLeftIcon from '../../assets/ArrowLeftIcon.svg';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';

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

export const Section = styled.section`
  margin-top: 48px;

  > span {
    display: block;
    font-size: 20px;
    line-height: 26px;
    color: #999591;

    padding-bottom: 16px;
    margin-bottom: 24px;
    border-bottom: 1px solid #3e3b47;
  }
`;

export const Appointment = styled.div`
  display: flex;

  & + div {
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;
    margin-right: auto;
    color: #f4ede8;
    font-size: 16px;

    svg {
      margin-right: 12px;
      height: 16px;
      width: 16px;
      color: #ff9000;
    }
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 26px;
    background: #3e3b47;
    padding: 16px 24px;
    border-radius: 10px;

    img {
      height: 56px;
      width: 56px;
      border-radius: 50%;
    }

    strong {
      margin-left: 16px;
      font-size: 20px;
      line-height: 26px;
      font-weight: 500;
      color: #f4ede8;
    }
  }
`;

export const Calendar = styled.aside`
  width: 360px;

  .DayPicker {
    border-radius: 10px;
    font-size: 16px;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 0.6rem;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    background: url(${ArrowLeftIcon}) no-repeat center;
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    background: url(${ArrowRightIcon}) no-repeat center;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 1rem 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1rem;
    padding: 0 1rem;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Weekday {
    color: #666360;
  }

  .DayPicker-Day {
    width: 2.5rem;
    height: 2.5rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 0.6rem;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: #fff;
  }

  .DayPicker-Day--disabled {
    color: #666360;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 0.6rem;
    color: #232129 !important;
  }
`;
