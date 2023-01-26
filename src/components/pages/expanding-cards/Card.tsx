import * as React from 'react';

interface CardProps {
  title: string;
  url: string;
  active: boolean;
}

const Card: React.FC<CardProps> = ({ title, url, active }) => {
  const toggleActive = (e: React.SyntheticEvent) => {
    const target = e.target! as HTMLDivElement;
    const panels = document.getElementsByClassName(
      'panel-ec'
    )! as HTMLCollectionOf<HTMLDivElement>;

    if (target.id === 'title') {
      return;
    }

    for (const panel of panels) {
      panel.classList.remove('active');
    }

    target.classList.add('active');
  };

  return (
    <div
      className={`panel-ec ${active ? 'active' : 'inactive'}`}
      style={{ backgroundImage: `url(${url})` }}
      onClick={(e) => toggleActive(e)}
    >
      <h3 id='title' className='panel-h3'>
        {title}
      </h3>
    </div>
  );
};

export default Card;
