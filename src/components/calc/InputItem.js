import { useState } from "react";

const InputItem = () => {

    const HeightValidator = (value) => {
        if (value.length < 1) return 'пустое значение';
        if (value.length < 3) return 'маленькое значение';
        if (isNaN(parseInt(value))) return 'Недопустимые символы';
        if (parseInt(value) > 250) return 'слишком большое значение';

        return;
    };
    const WeightValidator = (value) => {
        if (value.length < 1) return 'пустое значение';
        if (isNaN(parseInt(value))) return 'Недопустимые символы';
        if (parseInt(value) > 500) return 'слишком большое значение';

        return;
    };
    const AgeValidator = (value) => {
        if (value.length < 1) return 'пустое значение';
        if (isNaN(parseInt(value))) return 'Недопустимые символы';
        if (parseInt(value) > 120) return 'слишком большое значение';

        return;
    };

    const inputItem = [
        {
            id: 'heightPers',
            defaultText: 'Введите рост',
            validateItem: HeightValidator
        },
        {
            id: "weightPers",
            defaultText: "Введите вес",
            validateItem: WeightValidator
        },
        {
            id: "agePers", 
            defaultText: "Введите возраст",
            validateItem: AgeValidator
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

    return(
        <div className="calculating__choose calculating__choose_medium">
            {renderInputItem}
        </div>
    );
}

const CustomInput = (props) => {

    const {id, defaultText, validateItem} = props
    
    const [er, setEr] = useState('');

    const onBlur = (e) =>{
        setEr(validateItem(e.target.value))
    }

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
                <span>{er}</span>
            )}
        </div>
    )
}

export default InputItem;