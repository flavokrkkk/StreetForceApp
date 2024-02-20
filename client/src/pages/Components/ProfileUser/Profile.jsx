import { Link } from 'react-router-dom';
import './Profile.scss'

const Profile = () => {
    return (
       <div className='Profile__Container'>
            <div className="Profile__Wrapper">
                <div className='Profile__Title'>
                    <h1>Профиль</h1>
                </div>
                <div className='Profile__Info'>
                <div className='Profile__Left-Wrapper'>
                            <Link to='/profile' style={{textDecoration: 'none', color: 'gray'}}>
                            <div className="Profile__Navigate-Panel">
                                Профиль
                            </div>
                            </Link>
                                <Link to='/basket' style={{textDecoration: 'none', color: 'gray'}}>
                                <div className="Profile__Navigate-Panel">
                                    Моя Корзина
                                </div>
                                </Link>

                                <Link to='/shop' style={{textDecoration: 'none', color: 'gray'}}>
                                <div className="Profile__Navigate-PanelChild">
                                    Товары
                                </div>
                                </Link>
                            </div>

                    <div className='Profile__Right-Block'>
                        <div className='Profile__Right-Up'>
                            <div className="Profile__Right-Wrapper">
                            <div className="Profile__Right-Title">
                                    <h1>
                                        Пользователь
                                    </h1>
                                </div>

                                <div className="Profile__Right-Items">
                                    <div className="Profile__Right-Item-Left">
                                        <input type="text" className='input' placeholder='Имя'/>
                                        <input type="text" className='input' placeholder='Дата рождения'/>
                                        <input type="text" className='input' placeholder='Номер телефона'/>
                                    </div>
                                        
                                    <div className="Profile__Right-Item-Right">
                                        <input type="text" className='input' placeholder='Фамилия'/>
                                        <input type="text" className='input' placeholder='Пол'/>
                                        <input type="email" className='input' placeholder='E-mail'/>
                                    </div>
                                </div>
                                <button className='button' >Сохранить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Profile__Right-Block-Down'>
                    <div className='Profile__Right-Block-Down-Wrapper'>
                        <div className="Profile__Right-Title">
                                <h1>
                                    Пароль
                                </h1>
                        </div>
                        <div>
                            <button className='button'>
                                Изменить пароль
                            </button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        
    );
};

export default Profile;