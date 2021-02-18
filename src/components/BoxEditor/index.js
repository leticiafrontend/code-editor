import React from 'react';
import { Body, Box, Header } from './style';

export const BoxEditor = (props) => {
  return (
    <Box>
      <Header>{props.name}</Header>
      <Body>Olá</Body>
    </Box>
  );
};
