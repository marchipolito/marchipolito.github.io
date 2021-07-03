import './App.css';
import Profile from './components/Profile';
import Social from './components/Social';
import { faGithub,faYoutube,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGithub,faYoutube,faInstagram,faLinkedin,faEnvelope);

function App() {
  return (
     <div>
       <Profile />
       <Social />
     </div>
  );
}

export default App;
