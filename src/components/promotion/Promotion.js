import {useEffect, useState} from 'react';
import './Promotion.css';

const Promotion = () =>{
    
    const endTime = new Date('02/01/2022');
    
    const distance = endTime.getTime() - Date.now() - 3*60*60*1000;
    
    const [counter, setCounter] = useState(distance/1000);

    const padTime = time => {
        return String(time).length === 1 ? `0${time}` : `${time}`;
    };

    const format = time => {
        const d = new Date();
        d.setTime(time*1000);

        return(
            <div className="timer">
            <div className="timer__block">
                <span>{padTime(d.getMonth())}</span> 
                месяцев
            </div>
            <div className="timer__block">
                <span>{padTime(d.getDate())}</span> 
                дней
            </div>
            <div className="timer__block">
                <span>{padTime(d.getHours())}</span> 
                часов
            </div>
            <div className="timer__block">
                <span>{padTime(d.getMinutes())}</span> 
                минут
            </div>
            <div className="timer__block">
                <span>{padTime(d.getSeconds())}</span> 
                секунд
            </div>
            </div>
        );
        
       
    };

    useEffect(() => {
        
        let timer;
        if (counter > 0) {
            timer = setTimeout(() => setCounter(counter - 1), 1000);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        }
    }, [counter]);


 if (counter<=0) return(<></>)

    return (
        <div className="promotion">
            <div className="bgc_y">
            </div>
            <div className="container">
                {/* <div className="promotion__timer">
                    <div className="title">
                            Осталось до конца акции:
                    </div>
                        {format(counter)}
                </div> */}
                <div className="promotion__text">
                    <div className="title">
                        Акция для новых клиентов!
                    </div>
                    <div className="promotion__descr">
                        Мы ценим каждого клиента и предлагаем вам стать одним из них на очень выгодных условиях.
                        Каждому, кто закажет доставку питания на неделю, будет предоставлена скидка в размере <span>20%!</span>
                        <br/>
                    </div>
                </div>
                <div className="promotion__timer">
                    <div className="title">
                            Осталось до конца акции:
                    </div>
                        {format(counter)}
                </div>
            </div>
        </div>
    );

}

export default Promotion;