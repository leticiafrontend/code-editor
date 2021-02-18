import styled from 'styled-components';

export const Editor = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  padding: 30px;
  border-bottom: 6px solid #ff864b;
  display: flex;
  column-gap: 20px;
  height: auto;
  @media (max-width: 700px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;

export const File = styled.div`
  padding: 30px;
  height: 50vh;
  @media (max-width: 700px) {
    height: 500px;
  }
`;

export const Download = styled.button`
  border: none;
  padding: 10px 25px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 13px;
  margin: 0 0 30px 30px;
  transition: opacity 0.3s ease-in;
  background: linear-gradient(
    90deg,
    #ff884b 3.71%,
    #ff634c 36.91%,
    #fe4a4f 65.9%,
    #fe4840 98.63%
  );
  &:hover {
    opacity: 0.9;
  }
`;
