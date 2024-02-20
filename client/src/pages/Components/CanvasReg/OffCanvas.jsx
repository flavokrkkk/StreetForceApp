import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import './OffCanvas.scss'

const OffCanvas = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        {/* <Button variant="primary" onClick={handleShow} style={{marginTop: '100px'}}>
        Launch
      </Button> */}
      <h1 onClick={handleShow} style={{ cursor: 'pointer'}}>
        Контакты
      </h1>
        <div>
            <Offcanvas show={show} onHide={handleClose} placement="end" className="  m-3 p-2" style={{borderRadius: '15px', bottom: '3%'}}>
                <Offcanvas.Header closeButton style={{justifyContent: 'flex-end'}}></Offcanvas.Header>
                    <div className="Offcanvas__Block-Up" style={{margin: '15px'}}>
                        <Offcanvas.Title style={{padding: '30px 25px 0px 25px'}}>Street Force</Offcanvas.Title>
                        <Offcanvas.Title style={{padding: '30px 10px 0px 25px', fontSize: '28px'}}>Есть вопрос?</Offcanvas.Title>
                        <p style={{padding: '10px 30px 30px 25px', fontSize: '14px', fontWeight: 'bold'}}>Мы с удовольствием ответим!</p>
                    </div>
                <Offcanvas.Body>
                <div className="Offcanvas__Block-Up" style={{margin: '0px',backgroundColor: '#fcfcee'}}>
                        <Offcanvas.Title style={{padding: '30px 25px 0px 25px', fontSize: '16px', fontWeight: 'bold'}}>Поддержка в мессенджерах</Offcanvas.Title>
                        <Offcanvas.Title style={{padding: '20px 13px 0px 25px', fontSize: '14px', textTransform: 'none'}}>Поможем подобрать размер, посмотрим наличие товара, подскажем любые детали вашего заказа.</Offcanvas.Title>
                        <div style={{padding: '0px 20px 20px 20px'}}>
                        <button className="button">Напишите нам сообщение</button>
                        </div>
                    </div>

                    <div className="Offcanvas__Block-Up" style={{margin: '0px',backgroundColor: '#fcfcee', marginTop: '30px'}}>
                        <Offcanvas.Title style={{padding: '30px 25px 0px 25px', fontSize: '16px', fontWeight: 'bold'}}>Оформление заказа</Offcanvas.Title>
                        <Offcanvas.Title style={{padding: '20px 13px 0px 25px', fontSize: '14px', textTransform: 'none'}}>Чтобы купить понравившееся вам товары, следует лишь нажать на кнопку Оформить заказ и вас перебросит в телеграмм в чат с менеджером</Offcanvas.Title>
                        <div style={{padding: '0px 20px 20px 20px'}}>
                        <button className="button">Перейти в чат с менеджером</button>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
     
        </>
    );
};




export default OffCanvas;