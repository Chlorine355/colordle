import { Outlet } from 'react-router-dom';


export const AppContainer = () => {
    return (
    <div className='container'>
        <h1>COLORDLE</h1>
        <Outlet />
    </div>)
}