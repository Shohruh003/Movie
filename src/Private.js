import {Routes, Route, Link} from 'react-router-dom';
import { Users } from './Pages/users';
import {Single} from './Pages/Single'

export const Private = () => {
  return (
    <Routes>
      <Route path='/' element={<>Privateni home page <Link to="/users">Users</Link></>}/>
      <Route path='/users/*' element={<Users/>}/>
      <Route path='/movie/:id' element={<Single/>}/>
      <Route path='*' element={<>Error 404 bunday page topilmadi</>}/>
    </Routes>
  )
}