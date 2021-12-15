export const RatioChooser = (props) => {
    const {ratio, onClick} = props;

    const values =[
        {
            name: "Низкая активность",
            key: 'low',
        },
        {
            name:"Невысокая активность",
            key:'small',
        },
        {
            name:"Умеренная активность",
            key:'medium',
        },
        {
            name:"Высокая активность",
            key:'high',
        }
    ]

    const renderRatio = values.map( e => {
        return (
            <div 
            key={`ratio-${e.key}`}
            data={e.data} 
            id={e.key} 
            className={`calculating__choose-item ${e.key == ratio ? 'calculating__choose-item_active':''}`}>
                {e.name}
            </div>
        );
    })

    return(
        <div className="calculating__choose calculating__choose_big" onClick={onClick}>
            {renderRatio}
        </div>
    );

}

export default RatioChooser;