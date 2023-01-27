import * as React from 'react';
import * as Router from 'react-router-dom';
import AnimatedForm from './pages/animated-form/AnimatedForm';
import BlurryLoading from './pages/blurry-loading/BlurryLoading';
import DadJokes from './pages/dad-jokes-generator/DadJokes';
import Cards from './pages/expanding-cards/Cards';
import FAQCollapse from './pages/faq-collapse/FAQCollapse';
import Header from './Header';
import Search from './pages/hidden-search-widget/Search';
import KeyCodes from './pages/key-codes/KeyCodes';
import OptionPicker from './pages/option-picker/OptionPicker';
import ProgressSteps from './pages/progress-steps/ProgressSteps';
import RotatingNavigation from './pages/rotating-navigation/RotatingNavigation';
import Boxes from './pages/scroll-animation/Boxes';
import SoundBoard from './pages/soundboard/SoundBoard';
import SplitLanding from './pages/split-landing/SplitLanding';
import AnimatedNav from './pages/animated-navigation/AnimatedNav';
import IncrementalCounter from './pages/incremental-counter/IncrementalCounter';
import WaterTracker from './pages/water-tracker/WaterTracker';
import MovieApp from './pages/movie-app/MovieApp';

const App: React.FC = () => {
  const navigate = Router.useNavigate();

  React.useEffect(() => {
    if (!window.location.href.slice(-13).includes('components')) {
      navigate('/components/1');
    }
  }, []);

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
        <Router.Route path='/components/13' element={<OptionPicker />} />
        <Router.Route path='/components/14' element={<AnimatedNav />} />
        <Router.Route path='/components/15' element={<IncrementalCounter />} />
        <Router.Route path='/components/16' element={<WaterTracker />} />
        <Router.Route path='/components/17' element={<MovieApp />} />
      </Router.Routes>
    </div>
  );
};

export default App;
