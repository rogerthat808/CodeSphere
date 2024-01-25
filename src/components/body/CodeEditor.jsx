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
    try {
      output.contentWindow.eval(jsCode);
    } catch (error) {
      console.log('Error executing JavaScript code');
    }
  };

  let timeoutId;

  const submitJsChange = (e) => {
    if (e.key === 'Enter') {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => run(), 300); // Adjust the delay as needed
    }
  };

  const jsCodeHandler = (e) => {
    setJsCode(e.target.value);
  };

  return (
    <>
      <div className="message">
        <p>
          Hey, have you checked out Codesphere yet? 🚀 It's like the perfect code buddy for those diving into front-end development! 🌟 Super beginner-friendly, with a chill interface that won't overwhelm you. 🤓 Just the right vibe for coding fun without the fuss. Whether you're just starting or leveling up your front-end game, Codesphere's got your back! 💻✨ Happy coding!
        </p>
      </div>
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
          <textarea id="js-code" value={jsCode} onKeyUp={submitJsChange} onChange={jsCodeHandler}></textarea>
        </div>
        <div className="right">
          <label>
            <i className="fa-solid fa-play"></i> Output
          </label>
          <iframe id="output"></iframe>
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
