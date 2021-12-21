import SexChooser from './SexChooser';
import RatioChooser from './RatioChooser';
import { useEffect, useState} from 'react';

import './Calc.css';


const Calc = () => {
   
    const [result, setResult] = useState()
    const [sex, setSex] = useState("female");
    const [ratio, setRatio] = useState("small");
    const [height,setHeight] = useState();
    const [weight, setWeight] = useState();
    const [age, setAge] = useState();

    
    const HeightValidator = (value) => {
        if (value.length < 1) return 'пустое значение';
        if (isNaN(parseInt(value))) return 'Недопустимые символы';
        if (parseInt(value) > 250) return 'слишком большое значение';

        return;
    };
    const WeightValidator = (value) => {
        if (value.length < 1) return 'пустое значение';
        if (isNaN(parseInt(value))) return 'Недопустимые символы';
        if (parseInt(value) > 300) return 'слишком большое значение';

        return;
    };
    const AgeValidator = (value) => {
        if (value.length < 1) return 'пустое значение';
        if (isNaN(parseInt(value))) return 'Недопустимые символы';
        if (parseInt(value) > 120) return 'слишком большое значение';

        return;
    };
   

    const HeightValue = () => {
        const persH = parseInt(document.getElementById('heightPers').value);
        setHeight(persH);
        return;
    };

    const WeightValue = () => {
        const persW = parseInt(document.getElementById('weightPers').value);
        setWeight(persW);
        return;
    };

    const AgeValue = () => {
        const persA = parseInt(document.getElementById('agePers').value);
        setAge(persA);
        return;
    };
    


    const inputItem = [
        {
            id: 'heightPers',
            defaultText: 'Введите рост',
            validateItem: HeightValidator,
            persV: HeightValue
        },
        {
            id: "weightPers",
            defaultText: "Введите вес",
            validateItem: WeightValidator,
            persV: WeightValue
        },
        {
            id: "agePers", 
            defaultText: "Введите возраст",
            validateItem: AgeValidator,
            persV: AgeValue
        }
    ];

    const renderInputItem = inputItem.map(elem => {
        return(
            <>
                <CustomInput 
                    {...elem}
                />
            </>
        );
    });

    // Основная функция расчета
    const calcTotal = () => {

        inputItem.forEach(elem => {
            const value = document.getElementById(elem.id).value;
            if (elem.validateItem(value) != '') return setResult('____');
        })

        const curRatio = () => {

            switch (ratio) {
                case 'low': return 1.2;
                case 'small': return 1.375;
                case 'medium': return 1.55;
                case 'high': return 1.725;

            } 
        }
        
        if(isNaN(result)){
            setResult('____')
            // return;
        }
        if (sex === 'female') {
            const resFemale = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * curRatio());
            setResult(resFemale);
            return;
        } else {
            const resMale = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * curRatio());
            setResult(resMale);
            return;
        }
    }

    useEffect(()=>{
        calcTotal();
    })
    
    return (
        <div className="calculating">
            <div className="container">
                <h2 className="title">
                    Рассчитаем вашу потребность в калориях?
                </h2>
                 <div className="calculating__field"  onChange={() => calcTotal()} >
                    <div className="calculating__subtitle">
                        Ваш пол
                    </div>
                    <SexChooser
                        sex={sex}
                        onClick={(e) => {setSex(e.target.id)}}
                    />
                    <div className="calculating__subtitle">
                        Ваша конституция
                    </div>
                    <div className="calculating__choose calculating__choose_medium">
                        {renderInputItem}
                    </div>
                    <div className="calculating__subtitle">
                        Выберите вашу физическую активность
                    </div>
                    <RatioChooser 
                        ratio={ratio}
                        onClick={(e) => {setRatio(e.target.id)}}
                    />
                    <div className="calculating__divider"></div>

                    <div className="calculating__total">
                        <div className="calculating__subtitle">
                            Ваша суточная норма калорий:
                        </div>
                        <div className="calculating__result" >
                            <span>{result}</span> ккал
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
    );
}

const CustomInput = (props) => {

    const {id, defaultText, validateItem, persV} = props
    
    const [er, setEr] = useState('');

    const onBlur = (e) =>{
        setEr(validateItem(e.target.value));
        persV(e.target.id);
        
    };

    return(
        <div>
            <input 
                type='text' 
                id={id} 
                placeholder={defaultText} 
                className="calculating__choose-item" 
                onBlur={onBlur}
            />
            {er && (
                <span className="calculating__choose-item_error">{er}</span>
            )}
        </div>
    )
}

export default Calc;