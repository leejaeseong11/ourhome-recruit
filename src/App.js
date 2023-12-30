import './App.css';
import Cart from '../src/pages/cart/Cart.jsx';
import Main from '../src/pages/main/Main.jsx';
import Header from '../src/pages/header/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>   
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
