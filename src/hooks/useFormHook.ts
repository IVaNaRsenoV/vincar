import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  [key: string]: number | string;
};

export const useFormHook = <T extends FormValues>(
  onSubmit: SubmitHandler<T>
) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    resetField,
  } = useForm<T>();

  const wrappedSubmitHandler: SubmitHandler<T> = (data) => {
    onSubmit(data);
    reset();
  };

  return { register, errors, handleSubmit: handleSubmit(wrappedSubmitHandler), resetField };
};
