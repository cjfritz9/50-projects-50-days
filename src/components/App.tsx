import * as React from 'react';
import * as Router from 'react-router-dom';
import AnimatedForm from './animated-form/AnimatedForm';
import BlurryLoading from './blurry-loading/BlurryLoading';
import DadJokes from './dad-jokes-generator/DadJokes';
import Cards from './expanding-cards/Cards';
import FAQCollapse from './faq-collapse/FAQCollapse';
import Header from './Header';
import Search from './hidden-search-widget/Search';
import KeyCodes from './key-codes/KeyCodes';
import ProgressSteps from './progress-steps/ProgressSteps';
import RotatingNavigation from './rotating-navigation/RotatingNavigation';
import Boxes from './scroll-animation/Boxes';
import SoundBoard from './soundboard/SoundBoard';
import SplitLanding from './split-landing/SplitLanding';

const App: React.FC = () => {
  return (
    <div id='App' className='App'>
      <Header />
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
        <Router.Route path='/components/11' element={<KeyCodes />} />
        <Router.Route path='/components/12' element={<FAQCollapse />} />
      </Router.Routes>
    </div>
  );
};

export default App;
