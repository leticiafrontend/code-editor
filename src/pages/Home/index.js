import JSZip from 'jszip';
import { saveAs } from 'file-saver';
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

  const fileHtml = new Blob([html], { type: 'text/plain' });
  const fileCss = new Blob([css], { type: 'text/plain' });
  const fileJs = new Blob([js], { type: 'text/plain' });

  const linkHtml = URL.createObjectURL(fileHtml);
  const linkCss = URL.createObjectURL(fileCss);
  const linkJs = URL.createObjectURL(fileJs);

  const downloadFiles = () => {
    const zip = new JSZip();
    zip.file('index.html', html);
    zip.file('style.css', css);
    zip.file('scripts.js', js);

    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'arquivos.zip');
    });
  };

  return (
    <>
      <Editor>
        <BoxEditor
          name="HTML"
          value={html}
          link={linkHtml}
          fileName="index.html"
          onChange={({ target }) => setHtml(target.value)}
        />
        <BoxEditor
          name="CSS"
          value={css}
          link={linkCss}
          fileName="style.css"
          onChange={({ target }) => setCss(target.value)}
        />
        <BoxEditor
          name="JavaScript"
          value={js}
          link={linkJs}
          fileName="script.js"
          onChange={({ target }) => setJs(target.value)}
        />
      </Editor>
      <File>
        <iframe
          srcDoc={file}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </File>
      <Download onClick={downloadFiles}>Baixar Arquivos</Download>
    </>
  );
};
