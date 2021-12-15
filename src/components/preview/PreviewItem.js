import { ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';


import './Preview.css'

const PreviewItem = () => {
    const [id, setId] = useState(0);
    

    const menuItems = [
        "Фитнес",
        "Премиум",
        "Постное",
        "Сбалансированное"
    ]

    const renderMenuItems = menuItems.map((elem, ind) => {
        return(
            <ListGroup.Item>
                <div className="tabheader__item" id={ind}>
                    {elem}
                </div>     
            </ListGroup.Item>                          
        );
    });

       
    useEffect(()=>{
        const listElements = document.querySelectorAll('div.tabheader__item');
        
        listElements.forEach(elem=>{
            if(elem.classList.contains('tabheader__item_active')) {
                elem.classList.remove('tabheader__item_active');
                return true;//Чтобы не перебирал коллекцию дальше
            };           
        });

        listElements[id].classList.add('tabheader__item_active');

        const descrElements = document.querySelectorAll('div.tabcontent__descr');
        descrElements.forEach(elem => {
            if(!elem.classList.contains('hide')){
                elem.classList.add('hide');
            }
        })
         descrElements[id].classList.remove('hide');

        const slideElements = document.querySelectorAll('div.tabcontent');
        slideElements.forEach(elem => {
            if(!elem.classList.contains('hide')){
                elem.classList.add('hide');
            }
        })
        slideElements[id].classList.remove('hide');
        
        

    }, [id]);

    
    const handleSelectList = (e, id) => {
        id = e.target.id;
        //console.log("handleSelectList id: "+id);  
        if(!id) {return id=0;}
        setId(parseInt(id));   
    };
    

 
    return(
        <ListGroup as="ul" onClick={handleSelectList}>
            {renderMenuItems}
        </ListGroup>
        
    );
}

export default PreviewItem;