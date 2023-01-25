import * as React from 'react';
import * as Router from 'react-router-dom';
import './SplitLanding.css';
import PanelLeft from './PanelLeft';
import PanelRight from './PanelRight';
import Title from '../../Title';

const SplitLanding: React.FC = () => {
  React.useEffect(() => {
    const leftPanel = document.getElementById('left')! as HTMLDivElement;
    const rightPanel = document.getElementById('right')! as HTMLDivElement;
    const container = document.getElementById('root')! as HTMLDivElement;

    leftPanel.addEventListener('mouseenter', () => {
      container.classList.add('hover-left');
    });

    leftPanel.addEventListener('mouseleave', () => {
      container.classList.remove('hover-left');
    });

    rightPanel.addEventListener('mouseenter', () => {
      container.classList.add('hover-right');
    });

    rightPanel.addEventListener('mouseleave', () => {
      container.classList.remove('hover-right');
    });
  }, []);

  return (
    <div className='component-container' style={{backgroundColor: '#294053'}}>
      <Title title='Split Landing Page' color='white' font='Poppins' />
      <div className='container-sl'>
        <PanelLeft />
        <PanelRight />
      </div>
    </div>
  );
};

export default SplitLanding;
