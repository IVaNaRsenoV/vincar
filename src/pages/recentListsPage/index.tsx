import { useAppSelector } from 'src/hooks/reduxHooks'
import { RecentVinList } from 'src/components/templates';
import { TableResults } from 'src/components/molecules';
import styles from './variablesPage.module.scss';

export const ResentListPage = () => {

  const vinDataList = useAppSelector(state => state.setVinDataList.vinData);
  const vinData = useAppSelector(state => state.setVinData.data);

  return (
    <div className={styles.variables__wrapper}>

        <RecentVinList data={vinDataList} />

        <div>
            <TableResults data={vinData} />
        </div>
    </div>
  )
}