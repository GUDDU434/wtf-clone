
import './App.css';
import { Home } from './components/Home';
import {Route,Routes} from 'react-router-dom'
import { GymDetails } from './components/GymDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/gym_details/:gym_id' element={<GymDetails/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
