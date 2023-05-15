import { FC } from 'react'
import { IList, IVinData } from 'src/interfaces/mainPage'

interface IItem {
  propsItem: IVinData;
  onSubmit: (dataList: IList[]) => void;
}

export const Item: FC<IItem>= ({ propsItem, onSubmit }) => {

  const { id, key, data } = propsItem;

  return (
    <li 
        key={id} 
        onClick={() => onSubmit(data)}
    >
        {key}
    </li>
  )
}
