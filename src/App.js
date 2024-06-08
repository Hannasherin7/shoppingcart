import logo from './logo.svg';
import './App.css';
import { AddCart } from './components/AddCart';
import { SearchCart } from './components/SearchCart';
import { DeleteCart } from './components/DeleteCart';
import { ViewAll } from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={(<AddCart/>)}/>
    <Route path='/Search'element={(<SearchCart/>)}/>
    <Route path='/Delete'element={(<DeleteCart/>)}/>
    <Route path='/ViewAll'element={(<ViewAll/>)}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
