

import{Outlet} from 'react-router-dom';

import Header from './Header';
import './rootlayout.css'



const RootLayout = ({ children }) => (
   <>
      <Header />
         <main className='mainroot'>
         <Outlet />
            </main>
        
    </>
    
);

export default RootLayout;