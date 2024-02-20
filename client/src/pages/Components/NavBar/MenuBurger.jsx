import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import './MenuBurger.scss'
import menu from '../../../static/img/menu.png'
import { NavLink } from "react-router-dom";
import arrowRight from '../../../static/img/arrowRight.svg'
import banner2 from '../../../static/img/banner2.jpg'
import Footer from "../footer/Footer";
// import '../footer/Footer.scss'

const MenuBurger = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function refreshPage(time) {
        setTimeout(() => {
            window.location.reload();
        }, time)
        
      }
      
    return (
        <>
        {/* <Button variant="primary" onClick={handleShow} style={{marginTop: '100px'}}>
        Launch
      </Button> */}
        <div onClick={handleShow} className="NavBar__menu-burger">
            <img src={menu}/>
        </div>
        <div className="Burger__Menu-Wrapper">
            <Offcanvas show={show} onHide={handleClose} placement="start" className="canvas" style={{width: '734px', background: '#f9f9f9'}}>
            <div className="wrap">
                <Offcanvas.Header closeButton className="Burger__Header">
                    <NavLink to='/main' onClick={() => refreshPage(50)} style={{textDecoration: 'none', color: '#000'}}>
                        <Offcanvas.Title style={{ fontFamily: 'Helvetica-light', fontSize: '26px', textTransform: 'uppercase'}}><span>Street Force</span></Offcanvas.Title>
                    </NavLink>
                </Offcanvas.Header>

                 
                  
               <div className="Burger__Menu-Body">
                    
                    <NavLink to="/main" style={{textDecoration: 'none', color: 'black'}}>
                        <div className="Burger__Menu-Item" onClick={() => refreshPage(50)}>
                            <h1 onClick={() => refreshPage(50)}>Главная</h1>
                            <img src={arrowRight} alt="arrow" height='18'/>
                        </div>
                    </NavLink>
                    <div>
                        <img src={banner2} className="Burger__Menu-Banner"/>
                    </div>

                    <NavLink to="/shop" style={{textDecoration: 'none', color: 'black'}}>
                        <div className="Burger__Menu-Item" onClick={() => refreshPage(50)}>
                            <h1 onClick={() => refreshPage(50)}>Товары</h1>
                            <img src={arrowRight} alt="arrow" height='18'/>
                        </div>
                    </NavLink>

                    <NavLink to="/basket" style={{textDecoration: 'none', color: 'black'}}>
                        <div className="Burger__Menu-Item" onClick={() => refreshPage(50)}>
                            <h1>Корзина</h1>
                            <img src={arrowRight} alt="arrow" height='18'/>
                        </div>
                    </NavLink>
                    
                </div> 
                </div>  
                    <div className='Burger__Button' >
                        <NavLink to='/auth' >
                            <button className="Burger__Btn" onClick={() => refreshPage(270)}>
                                Авторизация
                            </button>
                        </NavLink>
                        
                    </div>
                <div >
                    <Footer/>
                </div>

                
            </Offcanvas>
        </div>
     
        </>
    );
};

export default MenuBurger;