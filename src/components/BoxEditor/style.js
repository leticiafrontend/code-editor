import styled from 'styled-components';

export const Box = styled.div`
  background-color: #fbfbfb;
  box-shadow: 0px 0px 27px -5px rgba(0, 0, 0, 0.25);
  width: 100%;
  border-radius: 13px;
`;

export const Header = styled.div`
  box-shadow: 0px 0px 27px -5px rgba(0, 0, 0, 0.25);
  border-radius: 13px 13px 0px 0px;
  padding: 10px 20px;
  color: #fff;
  font-weight: 500;
  background: linear-gradient(
    90deg,
    #ff884b 3.71%,
    #ff634c 36.91%,
    #fe4a4f 65.9%,
    #fe4840 98.63%
  );
`;

export const Body = styled.textarea`
  background: #fbfbfb;
  height: 300px;
  width: 100%;
  padding: 20px;
  border: none;
  resize: none;
  border-radius: 13px;
`;
