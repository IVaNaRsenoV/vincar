import { v4 as uuidv4 } from 'uuid';
import { IList } from 'src/interfaces/mainPage';
import { setVinData } from 'src/reducers/setVinParametersSlice';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { getModel } from 'src/api/services/getModel';
import { Button, NumberInput } from 'src/components/atoms';
import { IVinParameters } from 'src/interfaces/mainPage';
import styles from './searchForm.module.scss';
import { useFormHook } from 'src/hooks/useFormHook';

export const SearchForm = () => {

  const dispatch = useAppDispatch();

  const onSubmit = (data: IVinParameters) => {
    console.log(data);
    const { vin } = data;

    async function vinData() {
      const data = await getModel(vin);

      const response = data.filter((el: IList) => {
        if ( 
              el.Value !== null
          && el.ValueId !== '' 
          && el.Variable !== 'Error Code'
          && el.Value !== 'Not Applicable'
          ) return el;
      });

      const id = uuidv4();
      dispatch(setVinData({id, key: vin, data: response }));
    }

    vinData();
  }

  const { register, errors, handleSubmit } = useFormHook(onSubmit);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <NumberInput register={register} errors={errors} />
      <Button text={"set vin code"} />
    </form>
  )
}
