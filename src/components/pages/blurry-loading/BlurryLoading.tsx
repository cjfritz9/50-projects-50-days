import * as React from 'react';
import Title from '../../Title';
import './BlurryLoading.css';

const BlurryLoading: React.FC = () => {
  const [loadingPercentage, setLoadingPercentage] = React.useState<number>(0);
  const loadingRef = React.useRef<number>(0);
  const blurRef = React.useRef<number>(50);

  React.useEffect(() => {
    const blurring = (): void => {
      if (window.location.href.slice(-1) != '2') {
        return clearInterval(interval);
      }
      let loadingText = document.getElementById('load-text')! as HTMLDivElement;
      let image = document.getElementById('bg')! as HTMLDivElement;

      setLoadingPercentage(
        (prevLoadingPercentage) => prevLoadingPercentage + 1
      );
      loadingRef.current++;
      blurRef.current -= 0.5;
      if (loadingRef.current > 99) {
        setLoadingPercentage(100);
        clearInterval(interval);
      }
      loadingText.style.opacity = `${1 - (loadingRef.current / 100) * 1.1}`;
      image.style.filter = `blur(${blurRef.current}px)`;
    };
    let interval = setInterval(blurring, 30);
  }, []); 

  return (
    <div className='component-container'>
      <Title
        title='Blurry Loading'
        color='white'
        font='Sofia Sans'
        shadow='0px 0px 4px black'
      />
      <section id='bg' className='bg-bl'></section>
      <div id='load-text' className='loading-text'>
        {loadingPercentage}%
      </div>
    </div>
  );
};

export default BlurryLoading;
