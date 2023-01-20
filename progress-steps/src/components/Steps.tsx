import * as React from 'react';
import Circles from '../models/Circles';

const Steps: React.FC = () => {
  const [active, setActive] = React.useState<number>(1);
  const [disablePrev, setDisablePrev] = React.useState<boolean>(true);

  let progress: HTMLDivElement;
  let prev: HTMLButtonElement;
  let next: HTMLButtonElement;
  let circles: HTMLCollectionOf<HTMLDivElement>;

  const nextHandler = () => {
    console.log(prev);
    circles[active].classList.add('active');
    setActive(active + 1);
  };

  const prevHandler = () => {
    console.log('test');

    circles[active - 1].classList.remove('active');
    setActive(active - 1);
  };

  console.log('Current: ', active);

  React.useEffect(() => {
    progress = document.getElementById('progress')! as HTMLDivElement;
    prev = document.getElementById('prev')! as HTMLButtonElement;
    next = document.getElementById('next')! as HTMLButtonElement;
    circles = document.getElementsByClassName(
      'circles'
    )! as HTMLCollectionOf<HTMLDivElement>;

    if (active > 1) {
      prev.disabled = false;
      if (active == 4) {
        next.disabled = true;
      } else {
        next.disabled = false;
      }
    } else {
      prev.disabled = true;
    }

    progress.style.width = ((active - 1) / (Circles.length - 1)) * 100 + '%';
  }, [active]);

  return (
    <div className='container'>
      <div className='progress-container'>
        <div className='progress' id='progress'></div>
        {Circles.map((circle) => {
          return (
            <div
              key={circle.id}
              className={`circles ${circle.active ? 'active' : 'inactive'}`}
            >
              {circle.id}
            </div>
          );
        })}
      </div>
      <button onClick={prevHandler.bind(this)} className='btn' id='prev'>
        Prev
      </button>
      <button onClick={nextHandler.bind(this)} className='btn' id='next'>
        Next
      </button>
    </div>
  );
};

export default Steps;
