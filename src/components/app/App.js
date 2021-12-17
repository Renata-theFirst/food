import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {MainPage, CalcPage} from '../pages';
import AppHeader from '../appHeader/AppHeader.js';
import SidePanel from '../sidePanel/SidePanel.js';
import Footer from '../footer/Footer.js';
import ModalDialog from '../modal/ModalDialog.js';


const App = () => {
  return(
   
     <Router>
        <AppHeader/>
        <SidePanel/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/calc" element={<CalcPage/>}/>
        </Routes>
        <Footer/>
        <ModalDialog/>
      </Router>
  );
};

export default App;
