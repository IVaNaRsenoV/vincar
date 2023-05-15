import { useLastRequest } from 'src/hooks/useLastRequest';

import { useFormHook } from 'src/hooks/useFormHook';
import { LimitInput } from 'src/components/atoms/LimitInput';
import { Button } from 'src/components/atoms';

export const FormRecentList = () => {
  const [ _, actions] = useLastRequest();

  const submitForm = (data: { num: number }) => {
    resetField('num');
    actions.updateValue(data.num * 1);
  };

  const { register, errors, handleSubmit, resetField } = useFormHook(submitForm);

  return (
      <form onSubmit={handleSubmit}>
        <LimitInput register={register} errors={errors} text={"Input limit"}/>
        <Button text={"set recent quality"} />
      </form>
  );
};
