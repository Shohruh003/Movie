import {Routes, Route, Link} from 'react-router-dom';
import { Login } from './Pages/login';

export const Public = () => {
  return (
    <Routes>
      <Route path='/' element={<>Publicni home page <Link to="/login">Login</Link></>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<>Error 404 bunday page topilmadi</>}/>
    </Routes>
  )
}