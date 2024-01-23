import React, { useState, useEffect } from 'react';

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  useEffect(() => {
    run();
  }, [htmlCode, cssCode, jsCode]);

  const run = () => {
    const output = document.getElementById('output');
    output.contentDocument.body.innerHTML = htmlCode + '<style>' + cssCode + '</style>';
    output.contentWindow.eval(jsCode);
  };

  return (
    <div className="containerCode">
      <div className="left">
        <label>
          <i className="fa-brands fa-html5"></i> HTML
        </label>
        <textarea id="html-code" value={htmlCode} onChange={(e) => setHtmlCode(e.target.value)}></textarea>

        <label>
          <i className="fa-brands fa-css3-alt"></i> CSS
        </label>
        <textarea id="css-code" value={cssCode} onChange={(e) => setCssCode(e.target.value)}></textarea>

        <label>
          <i className="fa-brands fa-js"></i> JavaScript
        </label>
        <textarea id="js-code" value={jsCode} onChange={(e) => setJsCode(e.target.value)}></textarea>
      </div>
      <div className="right">
        <label>
          <i className="fa-solid fa-play"></i> Output
        </label>
        <iframe id="output"></iframe>
      </div>
    </div>
  );
};

export default CodeEditor;
