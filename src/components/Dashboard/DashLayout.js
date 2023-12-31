import DashboardHeader from "./DashboardHeader"
import { Outlet } from 'react-router-dom';
const DashLayout = ({ children }) => {

    return(
        <>
        <DashboardHeader />
           <main className='mainroot'>
           <Outlet />
              </main>
          
      </>
      
    )

}

export default DashLayout