import * as React from 'react';

const Background: React.FC = () => {
  const [loadingPercentage, setLoadingPercentage] = React.useState<number>(0);
  const loadingRef = React.useRef<number>(0);
  const blurRef = React.useRef<number>(50);

  React.useEffect(() => {
    const blurring = (): void => {
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
      console.log(blurRef.current);
      image.style.filter = `blur(${blurRef.current}px)`;
    };
    let interval = setInterval(blurring, 30);
  }, []);

  return (
    <>
      <section id='bg' className='bg'></section>
      <div id='load-text' className='loading-text'>
        {loadingPercentage}%
      </div>
    </>
  );
};

export default Background;
