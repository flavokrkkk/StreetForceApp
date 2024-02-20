import {BrowserRouter} from 'react-router-dom'
import './App.css'
import AppRouter from "./AppRouter";
import { NavBar } from './pages/Components/NavBar/NavBar';
import Footer from './pages/Components/footer/Footer';
import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './main';



const App = observer(() => {
    const {device} = useContext(Context)

    const {liked} = useContext(Context)


  useEffect(() => {
    if(localStorage.getItem('device') !== null || localStorage.getItem('device') == '[]'){
        const basket = JSON.parse(localStorage.getItem('device'))
        device.setDevices(basket)
    } else{
      localStorage.setItem('device', JSON.stringify([]))
    }

    if(localStorage.getItem('likes') !== null || localStorage.getItem('likes') == '[]'){
      const likes = JSON.parse(localStorage.getItem('likes'))
      liked.setLiked(likes)
  } else {
    localStorage.setItem('likes', JSON.stringify([]))
  }

  if(localStorage.getItem('typebar') !== null ){
    JSON.parse(localStorage.getItem('typebar'))
    
} else {
  localStorage.setItem('typebar', JSON.stringify([]))
}
    
  }, [])

  return (
    <>
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    </>
  );
})

export default App;
