import { NavLink } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <ul className={styles.wrapper}>
        <li>
            <NavLink to ='/'>Main page</NavLink>
        </li>
        <li>
            <NavLink to='/variables'>Recent VIN</NavLink>
        </li>
    </ul>
  )
}
