import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IVinParameters } from 'src/interfaces/mainPage';
import styles from './NumberInput.module.scss';

interface INumberProps {
    register: UseFormRegister<IVinParameters>;
    errors: FieldErrors<IVinParameters>;
};

export const NumberInput:FC<INumberProps> = ({ register, errors }) => {
  return (
    <label className={styles.number__label}>
      <input {...register("vin", {})} type="text" placeholder="input vin number" autoComplete="off" />
    </label>
  )
}
