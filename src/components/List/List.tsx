import { For } from 'solid-js';
import styles from './List.module.scss';

export const List = ({ items }: { items: () => string[] }) => (
  <ul class={styles.list}>
    <For each={items()}>{(item) => <li>{item}</li>}</For>
  </ul>
);
