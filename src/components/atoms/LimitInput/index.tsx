import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from './LimitInput.module.scss';

interface INumberProps {
    register: UseFormRegister<{num: number}>;
    errors: FieldErrors<{num: number}>
    text: string;
};

export const LimitInput:FC<INumberProps> = ({ register, errors, text }) => {
  return (
    <label className={styles.number__label}>
      <input {...register("num", {})} type="number" placeholder={`${text}`} />
    </label>
  )
}
