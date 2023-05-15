import { Outlet } from 'react-router-dom';

import { RoutesPage } from './routes';
import { Header } from './components/templates';

const App = () => {
  return (
    <div>
      <Header />
      <RoutesPage />
      <Outlet />
    </div>
  )
}

export default App
