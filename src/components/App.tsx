import * as React from 'react';
import * as Router from 'react-router-dom';
import AnimatedForm from './animated-form/AnimatedForm';
import BlurryLoading from './blurry-loading/BlurryLoading';
import DadJokes from './dad-jokes-generator/DadJokes';
import Cards from './expanding-cards/Cards';
import Search from './hidden-search-widget/Search';
import ProgressSteps from './progress-steps/ProgressSteps';
import RotatingNavigation from './rotating-navigation/RotatingNavigation';
import Boxes from './scroll-animation/Boxes';
import SoundBoard from './soundboard/SoundBoard';
import SplitLanding from './split-landing/SplitLanding';

const App: React.FC = () => {
  const numOfComponents = 11;
  const navigate = Router.useNavigate();

  const navHandler = (button: string): void => {
    const url = window.location.href;
    let targetPage: string;
    let pageIsdoubleDigit = false;

    if (url.slice(-3).charAt(1) === '/') {
      pageIsdoubleDigit = true;
    }
    console.log(pageIsdoubleDigit)
    console.log(url.slice(-1))

    if (!pageIsdoubleDigit) {
      if (button == 'next') {
        targetPage = (+url.slice(-1) + 1).toString();
        console.log(targetPage)
      } else {
        targetPage = (+url.slice(-1) - 1).toString();
      }
    } else {
      if (button == 'next') {
        targetPage = (+url.slice(-2) + 1).toString();
      } else {
        targetPage = (+url.slice(-2) - 1).toString();
      }
    }
    console.log(targetPage)
    navigate(`components/${targetPage}`);
  };

  return (
    <div id='App' className='App'>
      <Router.Routes>
        <Router.Route path='/components/1' element={<AnimatedForm />} />
        <Router.Route path='/components/2' element={<BlurryLoading />} />
        <Router.Route path='/components/3' element={<DadJokes />} />
        <Router.Route path='/components/4' element={<Cards />} />
        <Router.Route path='/components/5' element={<Search />} />
        <Router.Route path='/components/6' element={<ProgressSteps />} />
        <Router.Route path='/components/7' element={<RotatingNavigation />} />
        <Router.Route path='/components/8' element={<Boxes />} />
        <Router.Route path='/components/9' element={<SoundBoard />} />
        <Router.Route path='/components/10' element={<SplitLanding />} />
      </Router.Routes>
      {window.location.href.length == 34 &&
      window.location.href.slice(-1) == '1' ? (
        <button
          id='app-next'
          className='app-nav-btn'
          onClick={() => navHandler('next')}
        >
          Next
        </button>
      ) : window.location.href.slice(-2) == numOfComponents.toString() ||
        window.location.href.slice(-1) == numOfComponents.toString() ? (
        <button
          id='app-back'
          className='app-nav-btn'
          onClick={() => navHandler('back')}
        >
          Back
        </button>
      ) : (
        <>
          <button
            id='app-next'
            className='app-nav-btn'
            onClick={() => navHandler('next')}
          >
            Next
          </button>
          <button
            id='app-back'
            className='app-nav-btn'
            onClick={() => navHandler('back')}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
};

export default App;
