import Preview from '../preview/Preview.js';
import MainInfo from '../mainInfo/MainInfo.js';
import Promotion from '../promotion/Promotion.js';


const MainPage = () => {
   return(
       <>
        <Preview/>
        <div className="divider"></div>
        <MainInfo/>
        <div className="divider"></div>
        <Promotion/>
       </>
   ) 
}

export default MainPage;