import { TableRow } from 'src/components/atoms'
import { IList } from 'src/interfaces/mainPage'
import styles from './tableResults.module.scss';

export const TableResults = ({ data }: { data: IList[] }) => {
  return (
    <div>
        <table className={styles.table}>
            {
              data && data.map((el: IList, index) => {
                return (
                  <TableRow 
                    key={index}
                    value={el.Value}
                    variable={el.Variable}
                  />
                )
              })
            }
        </table>
    </div>
  )
}
