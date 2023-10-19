import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/components/CSS/App.css';
import Header from './components/partials/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Petshop from './pages/Petshop';
import Watch from './pages/Watch';
import Tablet from './pages/Tablet';
import Details from './pages/Details';
import { DataProvider } from './components/partials/Data';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DataProvider>
          <Header />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/petshop' Component={Petshop} />
            <Route path='/watch' Component={Watch} />
            <Route path='/sepet' Component={Cart} />
            <Route path='/tablet' Component={Tablet} />
            <Route path='/detail/:id' Component={Details} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
