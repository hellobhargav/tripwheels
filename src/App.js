import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net-dt/js/dataTables.dataTables.min.js'
import 'react-toastify/ReactToastify.css'
import './App.css';
import Header from './CarRental/Header';
import Footer from './CarRental/Footer';
import Routing from './CarRental/Routing';
import MobileContainer from './redux/MobileContainer';

import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const loginStatus = createContext();

function App() {
  const [login, setLogin] = useState(false)
  return (
    <>
      <loginStatus.Provider value={[login, setLogin]}>
        <Header />
        <Routing />
        <Footer />
      </loginStatus.Provider>
      {/* <Provider store={store}>
        <MobileContainer />
      </Provider> */}
    </>
  );
}

export default App;
