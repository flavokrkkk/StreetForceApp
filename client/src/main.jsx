import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { createContext } from 'react'
import DeviceStore from './utils/DeviceStore.jsx'

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider
        value={{
            device: new DeviceStore(),
            liked: new DeviceStore()
        }}
    >
        <App />
    </Context.Provider>
)
