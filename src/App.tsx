import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import IssueDetails from './components/IssueDetails/IssueDetails';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
         <NavBar/>
    <Routes>         
         <Route path='/' element={<Home />} />
         <Route path='/:issueNumber' element={<IssueDetails />} />
         <Route path='*' element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
