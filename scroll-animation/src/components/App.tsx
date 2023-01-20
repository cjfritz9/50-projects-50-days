import * as React from 'react';

const App: React.FC = () => {
  const checkBoxes = () => {
    const boxes = Array.from(document.getElementsByClassName('box'))!;
    const triggerBottom = window.innerHeight * 0.8;

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', checkBoxes);
    checkBoxes();
  }, []);

  return (
    <div className='App'>
      <h1>Scroll for Animation</h1>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
      <div className='box'>
        <h2>Content</h2>
      </div>
    </div>
  );
};

export default App;
