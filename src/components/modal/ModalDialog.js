import './ModalDialog.css';
import React from 'react';
import {Button, Modal, InputGroup, FormControl} from 'react-bootstrap';
// import {useState} from 'react';


function ModalDialog(props) {
    const {show, handleClose} = props;
    
    return(
        <div className="modalWindow">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Мы свяжемся с вами как можно быстрее!</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>
                    <InputGroup className="mb-3" type={"name"} >
                        <FormControl 
                            // onChange={nameValidation}
                            id="name"
                            placeholder="Ваше имя"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon1"
                            
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" type={"number"} >
                        <InputGroup.Text id="basic-addon1">+7</InputGroup.Text>
                        <FormControl 
                            id="phone"
                            placeholder="Ваш номер телефона"
                            aria-label="number"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                </Modal.Body>
        
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose} >Перезвонить мне</Button>                    
                    </Modal.Footer>
            </Modal> 
        </div>
    );
}

export default ModalDialog;

