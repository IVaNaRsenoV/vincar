import { IList, IVinData } from 'src/interfaces/mainPage';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { setVinData } from 'src/reducers/setVinDataSlice';
import { Item } from 'src/components/atoms';

export const ListRecent = ({ data }: { data: IVinData[] }) => {

  const dispatch = useAppDispatch();

  const onSubmit = (dataList: IList[]) => {
    dispatch(setVinData(dataList));
  };

  return (
      <ul>
        {data &&
          data.map((el: IVinData) => (
            <Item key={el.id} propsItem={el} onSubmit={onSubmit} />
          ))}
      </ul>
  );
};
