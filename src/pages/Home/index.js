import React, { useState } from 'react';
import { BoxEditor } from '../../components/BoxEditor';
import { Download, Editor, File } from './style';

export const Home = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const file = `  
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  return (
    <>
      <Editor>
        <BoxEditor
          name="HTML"
          value={html}
          onChange={({ target }) => setHtml(target.value)}
        />
        <BoxEditor
          name="CSS"
          value={css}
          onChange={({ target }) => setCss(target.value)}
        />
        <BoxEditor
          name="JavaScript"
          value={js}
          onChange={({ target }) => setJs(target.value)}
        />
      </Editor>
      <File>
        <iframe
          srcDoc={file}
          title="output"
          sandbox="allow-scripts"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </File>
      <Download>Baixar Arquivos</Download>
    </>
  );
};
