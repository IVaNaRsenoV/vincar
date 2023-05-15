import { FC } from 'react';
import { IVinData } from 'src/interfaces/mainPage';
import { FormRecentList, ListRecent } from 'src/components/molecules';
import styles from './recentVinList.module.scss';

interface IRecentVinList {
  data: IVinData[]
}

export const RecentVinList: FC<IRecentVinList> = ({ data }) => {
  return (
    <div className={styles.variables__results}>
      <FormRecentList />
      <ListRecent data={data} />
    </div>
  );
};
