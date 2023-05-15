import { Layout } from 'src/layout'
import { SearchForm } from '../SearchForm'
import img from 'src/assets/img/logo.png';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header>
      <div className={styles.header__wrapper}>
        <div>
            <img src={img} alt="Logo" />
          </div>
          <div className={styles.header__logic}>
            <Layout />
            <SearchForm />
          </div>
      </div>
    </header>
  )
}
