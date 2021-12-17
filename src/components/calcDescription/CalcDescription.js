import './CalcDescription.css';
import Calc from '../../resources/img/calc/Calc.jpg';

const CalcDescription = () => {
    return(
        <div className="info">
            <div className="bgc_с">
            </div>
            <div className="container">
                <div className="info__text">
                    <h2 className="title">
                        Для чего нужен рассчет калорий?
                    </h2>
                    <div className="info__descr">
                        Суточная норма калорий — это количество энергии, необходимое организму для функционирования и поддержания обмена веществ. Снижение нормы калорий на 10-15% в день ведет к похудению, тогда как для набора мышечной массы нужно увеличить калорийность дневного рациона.
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="info__advantages">
                    <h3>Важно понимать, что норма калорий — это условная цифра! </h3>
                    <div className="info__advantages-text">
                        Суточная норма калорий представляет лишь общий ориентир для составления диеты, тогда как на практике удобнее рассчитывать нормы потребления БЖУ (белков, жиров и углеводов). Также важно учитывать гликемический индекс углеводов — то, как быстро они повышают уровень сахара в крови.
                    </div>
                </div>
                <div className="info__pic">
                    <div className="info__pic-wrapper">
                    <img src={Calc}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default CalcDescription;