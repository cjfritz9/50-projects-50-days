import * as React from 'react';
import './Boxes.css';

const Boxes: React.FC = () => {
  const checkBoxes = () => {
    window.addEventListener('scroll', checkBoxes);
    const boxes = Array.from(
      document.getElementsByClassName(
        'box-sa'
      )! as HTMLCollectionOf<HTMLDivElement>
    );
    const triggerBottom = window.innerHeight * 0.7;

    boxes.forEach((box) => {
      if (triggerBottom > 1000) {
        box.style.marginBottom = '100px';
      }
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    });
  };

  React.useEffect(() => {
    checkBoxes();
  }, []);

  return (
    <div className='component-container'>
      <h1 id='project-title'>Scroll Animations</h1>
      <div className='container-sa'>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
        <div className='box-sa'>
          <h2>Content</h2>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
