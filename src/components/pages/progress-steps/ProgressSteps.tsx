import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import Circles from '../../models/Circles';
import './ProgressSteps.css';
import Title from '../../Title';

const ProgressSteps: React.FC = () => {
  const [active, setActive] = React.useState<number>(1);
  const [disablePrev, setDisablePrev] = React.useState<boolean>(true);

  let progress: HTMLDivElement;
  let prev: HTMLButtonElement;
  let next: HTMLButtonElement;
  let circles: HTMLCollectionOf<HTMLDivElement>;

  const nextHandler = () => {
    circles[active].classList.add('active');
    setActive(active + 1);
  };

  const prevHandler = () => {
    circles[active - 1].classList.remove('active');
    setActive(active - 1);
  };

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
    <Chakra.Flex bgColor='blackAlpha.100' className='component-container'>
      <Title title='Progress Steps' color='#06233d' font='Mulish' />
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
      <div className='btn-container-ps'>
        <button onClick={prevHandler.bind(this)} className='btn-ps' id='prev'>
          Prev
        </button>
        <button onClick={nextHandler.bind(this)} className='btn-ps' id='next'>
          Next
        </button>
      </div>
    </Chakra.Flex>
  );
};

export default ProgressSteps;
