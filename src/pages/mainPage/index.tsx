import { useAppSelector } from 'src/hooks/reduxHooks';
import { TableResults } from 'src/components/molecules';
import styles from './mainPage.module.scss';

export const MainPage = () => {
  const vinDataList = useAppSelector(state => state.setVinDataList.vinData);
  
  return (
    <div className={styles.mainPage__wrapper}>
      <div className={styles.result__header}>
        <h3>Result search</h3>
        <p>{vinDataList[0]?.key}</p>
      </div>
      <div>
          <TableResults data={vinDataList[0]?.data} />
        </div>
    </div>
  )
}
