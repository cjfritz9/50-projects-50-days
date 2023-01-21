import * as React from 'react';
import './KeyCodes.css';

const KeyCodes: React.FC = () => {
  const [key, setKey] = React.useState<string>('');
  const [keyCode, setKeyCode] = React.useState<string>('');
  const [code, setCode] = React.useState<string>('');

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.code == 'Space') {
      setKey('space');
      setKeyCode(e.keyCode.toString());
      return setCode(e.code);
    }
    setKey(e.key);
    setKeyCode(e.keyCode.toString());
    setCode(e.code);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyPress(e));
  });
  return (
    <div className='component-container'>
      <h1 id='project-title'>Key Codes</h1>
      {key ? (
        <div className='container-kc'>
          <div className='key'>
            {key ? key : ''}
            <small>event.key</small>
          </div>
          <div className='key'>
            {keyCode ? keyCode : ''}
            <small>event.keyCode</small>
          </div>
          <div className='key'>
            {code ? code : ''}
            <small>event.code</small>
          </div>
        </div>
      ) : (
        <div className='key'>Press Any Key To Get The Values</div>
      )}
    </div>
  );
};

export default KeyCodes;
