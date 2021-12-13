import {Button, Carousel} from 'react-bootstrap';
import { useState } from 'react';
import ModalDialog from '../modal/ModalDialog';
import pepper from '../../resources/img/slider/pepper.jpg';
import olive from '../../resources/img/slider/olive-oil.jpg';
import paprika from '../../resources/img/slider/paprika.jpg';
import food from '../../resources/img/slider/food-12.jpg';

import './MainInfo.css';

const MainInfo = () => {
    const [slideId, setSlideId] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    } 

    const openModal = () => {
        setShowModal(true);
    }
        
    const handleSelectCarousel2 = (id) => {
        console.log("id:"+id+" slideId:"+slideId);
        setSlideId(id);
    };

    return(
        <div className="offer">
            <div className="bgc_y">
            </div>
            <div className="container">
                <div className="offer__text">
                    <h2 className="title">
                        Что мы можем вам предложить?
                    </h2>
                    <div className="offer__descr">
                        Наша основная идея - это правильное питание. Оно может быть простым и вкусным. Мы не просто доставка, мы сервис! Мы взяли на себя все расчеты БЖУ, калорийности, объемов порций и прочие важные, но скучные аспекты. Вам остается только полезная, сытная и правильная еда, которую мы привозим прямо под дверь.
                    </div>
                </div>
                    <Button variant="dark" onClick={openModal}>Связаться с нами</Button>{' '}
            </div>
            <div className="container">
                <div className="offer__advantages">
                    <h2>Быстро и полезно</h2>
                    <div className="offer__advantages-text">
                        Готовка дома занимает много сил, времени и нервов. Мы привозим еду сразу на целый день, и ты можешь действовать так, как тебе удобно, не подстраиваясь ни под кого и будучи уверенным в качестве продукта!
                    </div>
                    <h2>Правильный рацион</h2>
                    <div className="offer__advantages-text">
                        Мы разработали специальное меню, где учтены все нюансы правильного питания, от баланса БЖУ до их приготовления и дробления рациона.
                    </div>
                </div>
                <div className="offer__slider">
                <div className="offer__slider-counter">
                            <span id="current">{slideId+1}</span>
                            <span id="total">/</span>
                            <span id="total">4</span>
                        </div>
                    <div className="offer__slider-wrapper">
                        <Carousel className="offer__slider-inner" activeIndex={slideId} onSelect={handleSelectCarousel2} interval={null} >
                            <Carousel.Item className="offer__slide">
                                <img src={pepper} alt="pepper"/>
                            </Carousel.Item>
                            <Carousel.Item className="offer__slide">
                                <img src={food} alt="food"/>
                            </Carousel.Item>
                            <Carousel.Item className="offer__slide">
                                <img src={olive} alt="oil"/>
                            </Carousel.Item>
                            <Carousel.Item className="offer__slide">
                                <img src={paprika} alt="paprika"/>
                            </Carousel.Item>
                        </Carousel>
                        <ModalDialog
                            show={showModal}
                            handleClose={handleClose}
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default MainInfo;