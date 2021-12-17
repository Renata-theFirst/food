import CalcDescription from '../calcDescription/CalcDescription.js';
import Calc from '../calc/Calc.js';

const CalcPage = () => {
    return(
        <>
            <CalcDescription/>
            <div className="divider"></div>
            <Calc/>
        </>
    )
}

export default CalcPage;