import AppHeader from '../appHeader/AppHeader.js';
import MainInfo from '../mainInfo/MainInfo.js';
import Preview from '../preview/Preview.js';
import SidePanel from '../sidePanel/SidePanel.js';
import Calc from '../calc/Calc.js';
import Footer from '../footer/Footer.js';
import ModalDialog from '../modal/ModalDialog.js';


const App = () => {
  return(
   
     <>
      <AppHeader/>
      <SidePanel/>
      <Preview/>
      <div className="divider"></div>
      <MainInfo/>
      <div className="divider"></div>
      <Calc/>
      <Footer/>
      <ModalDialog/>
      </>
  )
}

export default App;
