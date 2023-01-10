import { RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Index'
import {router} from './Routes/Index'


function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
