import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Explore from './components/Explore/Explore';
import Activity from './components/Activity/Activity';
import Community from './components/Community/Community';
import Page from './components/Page/Page';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/home' element={<Home></Home>} ></Route>
          <Route path='/explore' element={<Explore></Explore>} ></Route>
          <Route path='/activity' element={<Activity></Activity>} ></Route>
          <Route path='/community' element={<Community></Community>} ></Route>
          <Route path='/page' element={<Page></Page>} ></Route>
          <Route path='/contact' element={<Contact></Contact>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
