import './main.scss'
import djersi from '../../static/img/djersi.png'
import djersiTwo from '../../static/img/djersiTwo.jpg'
import winter from '../../static/img/winter.png'
import sweatwear from '../../static/img/sweatwear.png'
import black from '../../static/img/black.png'
import brown from '../../static/img/brown.png'
import purple from '../../static/img/purple.png'
import fendi from '../../static/img/fendi.png'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>  
            <div className="Main__Wrapper">
                <div className="Main__Container">
                    <div className="Main__title">
                        <div className='Main__title-up'>
                            <h1 className='Main__title-head' style={{textTransform: 'uppercase'}}>Street Force</h1>
                            <p className='Main__title-text'>Молодой бренд одежды, который тесно сотрудничает с дизайнерами по всему миру</p>  
                        </div>
                        <Link to="/shop"><button className='Main__title-button'>Перейти к покупкам</button></Link>
                        
                    </div>
                </div>
            </div>
            <div className='Main__Container'>
                <div className='Main__Collection'>
                    <div className='Main__Collection-title'>
                        <h1>StreetForce Colection</h1>
                    </div>
                    <div className='Main__Container-Card-Wrap'>

                    
                    <div className='Main__Container-Card'>
                            <div className='Main__Container-Card-Item'>
                                <img src={djersi} width="361" height="280" style={{borderRadius:'30px'}}/>
                            </div>

                            <div className='Main__Container-Card-Item'>
                                <img src={djersiTwo} width="361" height="280" style={{borderRadius:'30px'}}/>
                            </div>

                            <div className='Main__Container-Card-Item'>
                                <img src={winter} width="361" height="280" style={{borderRadius:'30px'}}/>
                            </div>
                    </div>
                    </div>
                <div className='slide-wrapper'>
                    <div className='slide-cont'>
                    <Slider {...settings} >
                            <div style={{border: '1px solid white'}}>
                                <img src={winter} width="361" height="280" style={{borderRadius:'30px'}}/>
                            </div>

                            <div >
                                <img src={djersiTwo} width="361" height="280" style={{borderRadius:'30px'}}/>
                            </div>

                            <div >
                                <img src={djersi} width="300" height="220" style={{borderRadius:'30px'}}/>
                            </div>
                    </Slider>
                    </div>
                </div>
                </div>
            </div>
            <div className='Main__Container'>
                <div className='Main__Sweatshirt'>
                    <div className='Main__Sweatshirt-title'>
                        <h1>Свитшоты</h1>
                    </div>
                    <div className='Main__Sweatshirt-Card'>
                        <div className='Main__Sweatshirt-Card-Item'>
                            <img src={sweatwear} width="470" height="396"/>
                        </div>
                        <div className='Main__Sweatshirt-Card-Second'>

                            <div className='Main__Sweatshirt-Card-Items'>
                                <img src={black} width="276" height="227"/>
                            </div>

                            <div className='Main__Sweatshirt-Card-Items'>
                                <img src={brown} width="276" height="227"/>
                            </div>

                        </div>

                        <div className='Main__Sweatshirt-Card-Items'>
                                <img src={purple} width="276" height="227"/>
                            </div>
                    </div>


                    <div className='Main__Sweatshirrt-Card'>
                        <div>
                        <div className='Main__Sweatshirrt-Card-Item'>
                            <img src={sweatwear} width="276" height="227" />
                        </div>
                            <div className='Main__Sweatshirrt-Card-Item'>
                                <img src={black} width="276" height="227"/>
                            </div>
                        </div>
                        
                        <div>
                        <div className='Main__Sweatshirrt-Card-Item'>
                                <img src={brown} width="276" height="227"/>
                            </div>

                        <div className='Main__Sweatshirrt-Card-Item'>
                                <img src={purple} width="276" height="227"/>
                            </div>
                        </div>
                            
                    </div>

                </div>
            </div>
            <div className='Main__Container'>
                <div className='Main__Info'>
                    <div className='Main__Info-Wrapper'>
                <div className='Main__Info-Block'>
                    <div className='Main__Info-title'>
                        <h1>Доставка</h1>
                    </div>
                        <div className='Main__Info-Block-Text'>
                            <p>На данный момент наш магазин работает только по Костроме и чтобы оформить заказ вам требуется только кликнуть по кнопке <strong style={{textTransform: 'uppercase'}}>Оформить заказ</strong></p>
                        </div>
                </div>
                        <div>
                            <img src={fendi} width="637" height="358" style={{borderRadius: '30px'}}/>
                        </div>
                    </div>       
                    
                </div>

                <div className='Main__Info-add'>
                    <div className='Main__Info-title'>
                        <h1>Доставка</h1>
                    </div>
                    <div className='Main__Info-add-content'>
                        <div>
                            <img src={fendi} width="637" height="358" style={{borderRadius: '30px'}}/>
                        </div>
                        <div className='Main__Info-Block-Text'>
                            <p>На данный момент наш магазин работает только по Костроме и чтобы оформить заказ вам требуется только кликнуть по кнопке <strong style={{textTransform: 'uppercase'}}>Оформить заказ</strong></p>
                        </div>
                    </div>
                </div>    
                
            </div>
        </>
    );
};

export default Main;