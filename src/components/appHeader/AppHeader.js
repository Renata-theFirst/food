// import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import './AppHeader.css';
import logo from '../../resources/icons/logo.svg';
import ModalDialog from '../modal/ModalDialog';
import { useState } from 'react';
// import {ReactDOM} from 'react-dom'

const AppHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [objectStore, setObjectStore] = useState({
      name: "",
      phone: "",
  });

  const handleClose = () => {
      const data = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
      }
      
      saveToStore(data).then(res =>{
          console.log("Данные отправлены!");
          setObjectStore(data);    
          setShowModal(false);
      });
     
  }

  const openModal = () => {
    console.log(showModal);
    setShowModal(true);
  }

  const saveToStore = async (e) => {
    localStorage.setItem('record',JSON.stringify(e));
  }

  const loadFromStore = async () => {
    const storeData = localStorage.getItem('record');
    return await JSON.parse(storeData);
  }

  loadFromStore().then(res =>{
      console.log(res);
  });

console.log("render");

    return(
      <>
      <header className="header">
        <div className="header__left-block">
          <div className="header__logo">
           <img src={logo} alt="Логотип"/>
          </div>
          <nav className="header__links">
            <a href="/" className="header__link">Главная страница</a>
            <a href="#" className="header__link">Калькулятор калорий</a>
          </nav>
        </div>
        <div className="header__right-block">
          <Button variant="light" onClick={openModal}>Связаться с нами</Button>
        </div>  
      </header>
      <ModalDialog 
      show={showModal}
      handleClose={handleClose}
      />
    </>
    );

    
}


export default AppHeader;