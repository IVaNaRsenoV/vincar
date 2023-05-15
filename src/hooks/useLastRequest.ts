import { useState } from 'react';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { setLimit } from 'src/reducers/setVinParametersSlice';

type LastRequestState = {
    value: number;
};

type LastRequestActions = {
    updateValue: (newValue: number) => void;
}

export const useLastRequest = (): [LastRequestState, LastRequestActions] => {

  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(3);

  const updateValue = (newValue: number) => {
    setValue(newValue);
    dispatch(setLimit(newValue));
  };

  const state: LastRequestState = { value };
  const actions: LastRequestActions = { updateValue };

  console.log(value);

  return [state, actions];
};
