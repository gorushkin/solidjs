import { Accessor, Setter } from 'solid-js';
import styles from './Input.module.scss';

export const Input = ({
  setValue,
  value,
}: {
  setValue: Setter<string>;
  value: Accessor<string>;
}) => {
  const handleInput = (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) => {
    setValue(e.target.value);
  };

  return <input placeholder='...начните вводить текст' class={styles.input} value={value()} onInput={handleInput}></input>;
};
