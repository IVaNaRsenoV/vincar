import { Routes, Route } from 'react-router-dom';
import { MainPage, ResentListPage } from 'src/pages';

export const RoutesPage = () => {
  return (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/variables' element={<ResentListPage />} />
    </Routes>
  )
}
