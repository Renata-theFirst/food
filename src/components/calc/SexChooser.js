
export const SexChooser = (props) => {

    const {sex, onClick} = props;

    const values = [
        {
            name: 'Женщина',
            key:  'female'
        }, 
        {
            name: 'Мужчина',
            key: 'male'
        }
    ];

    const rvalues = values.map( e => {
        return(
            <div 
                key={`sex-item-${e.key}`}
                id={e.key} 
                className={`calculating__choose-item ${e.key == sex ? 'calculating__choose-item_active':''}`} 
            >
                {e.name}
            </div> 
        )
    })
    return(
        <div  className="calculating__choose" id="gender" onClick={onClick}>
            {rvalues}
        </div>
        
    )
}

export default SexChooser;