import {Routes, Route} from 'react-router-dom'
import { publicRoutes } from './routes';

const AppRouter = () => {
    return (
        <>
            <Routes>
                    {publicRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} Component={Component} />
                    )}
            </Routes>
        </>
    );
};

export default AppRouter;