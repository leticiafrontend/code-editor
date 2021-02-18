import React from 'react';
import { BoxEditor } from '../../components/BoxEditor';
import { Editor } from './style';

export const Home = () => {
  return (
    <>
      <Editor>
        <BoxEditor name="HTML" />
        <BoxEditor name="CSS" />
        <BoxEditor name="JavaScript" />
      </Editor>
    </>
  );
};
