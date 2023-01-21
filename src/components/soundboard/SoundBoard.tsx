import * as React from 'react';
import './SoundBoard.css';
import sound1 from './sounds/sound-board_sounds_applause.mp3';
import sound2 from './sounds/sound-board_sounds_boo.mp3';
import sound3 from './sounds/sound-board_sounds_gasp.mp3';
import sound4 from './sounds/sound-board_sounds_tada.mp3';
import sound5 from './sounds/sound-board_sounds_victory.mp3';
import sound6 from './sounds/sound-board_sounds_wrong.mp3';

const SoundBoard: React.FC = () => {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

  const stopSounds = () => {
    sounds.forEach((_sound) => {
      const sound = document.getElementById(_sound)! as HTMLAudioElement;
      sound.pause();
      sound.currentTime = 0;
    });
  };

  React.useEffect(() => {
    const buttons = document.getElementById('buttons')!;
    sounds.forEach((sound) => {
      const button = document.createElement('button');
      button.classList.add('btn-sb');
      button.textContent = sound;
      button.addEventListener('click', () => {
        stopSounds();
        const soundEle = document.getElementById(sound)! as HTMLAudioElement;
        soundEle.volume = 0.1;
        soundEle.play();
      });
      buttons.appendChild(button);
    });
  }, []);

  return (
    <div className='component-container'>
      <h1 id='project-title'>Sound Board</h1>
      <div className='container-sb'>
        <audio id='applause' src={sound1} />
        <audio id='boo' src={sound2} />
        <audio id='gasp' src={sound3} />
        <audio id='tada' src={sound4} />
        <audio id='victory' src={sound5} />
        <audio id='wrong' src={sound6} />
        <div id='buttons'></div>
      </div>
    </div>
  );
};

export default SoundBoard;
