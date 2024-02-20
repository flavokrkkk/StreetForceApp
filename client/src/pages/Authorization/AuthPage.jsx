import './AuthPage.scss'
import lock from '../../static/img/lock.png'
import email from '../../static/img/email.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {

    const [isAuth, setIsAuth] = useState(false)

  
    return (
        <section className='main-block' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', width: '100%'}}>
            <div className='form-box'>
                <div className="form-value">
                    <form action="">
                        {
                            isAuth == true
                            ?
                            <h2 className='title'>Login</h2>
                            :
                            <h2 className='title'>Registration</h2>
                        }
                        <div className="inputbox">
                            <img src={email}/>
                            <input type='email' required/>
                            <label htmlFor="">E-mail</label>
                        </div>
                        <div className="inputbox">
                            <img src={lock}/>
                            <input type='password' required/>
                            <label htmlFor="">Password</label>
                        </div>
                        <div className="forget">
                            {
                                isAuth == true
                                ?
                                <label>Нет аккаунта ?<a style={{marginLeft: '10px'}} href='#' onClick={() => setIsAuth(false)}>Зарегестрируйтесь!</a></label>
                                :
                                <label>Есть аккаунт ?<a style={{marginLeft: '10px'}} href='#' onClick={() => setIsAuth(true)}>Войдите!</a></label>
                                
                            }
                            
                            
                        </div>
                        {
                            isAuth == true
                            ?
                            <button className='btn-log'>Sign in</button>
                            :
                            <button className='btn-log'>Sign up</button>
                        }
                        
                        <Link to='/main' style={{textDecoration: 'none'}}>
                            <div className="register">
                                <p><a href='#'>StreetForce</a></p>
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AuthPage;