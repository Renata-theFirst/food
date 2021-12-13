
import {Container, Row, Col} from 'react-bootstrap';
import PreviewSlide from './PreviewSlide.js';
import PreviewItem from './PreviewItem.js';
import PreviewDescr from './PreviewDescr.js';

import './Preview.css';


const Preview = (props) => {
    
    
    return(
        <div className="preview">
            <div className="bgc_blue">
            </div>
            <Container className="container">
                <Row>
                    <Col className="tabcontainer" >
                        <PreviewSlide/>
                    </Col>
                    <Col className="tabheader__items">
                        <div>
                            <h3>
                                Выберите стиль питания
                            </h3>
                        </div>
                            <PreviewItem/>
                    </Col>
                 </Row>
                 <Row className="description">
                    <PreviewDescr/>
                 </Row>
                <Row className="preview__life">
                    Живи полной жизнью!
                </Row>
            </Container>
        </div> 

    );
    
}

export default Preview;