import React from 'react';
import { Body, Box, Header } from './style';
import download from '../../images/download.svg';

export const BoxEditor = (props) => {
  return (
    <Box>
      <Header>
        <p>{props.name}</p>
        <a href={props.link} download={props.fileName}>
          <img src={download} alt="Download" width="20px" />
        </a>
      </Header>
      <Body
        value={props.value}
        onChange={props.onChange}
        alt={props.name}
      ></Body>
    </Box>
  );
};
