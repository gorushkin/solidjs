import { createSignal } from 'solid-js';
import { List } from '../List/List';
import styles from './Search.module.scss';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

export const Search = (props: { items: string[] }) => {
  const [sortDirection, setSortDirection] = createSignal('asc');
  const [value, setValue] = createSignal('');

  const sortedItems = () =>
    sortDirection() === 'asc' ? props.items.sort() : props.items.sort().reverse();

  const filteredItems = () =>
    sortedItems().filter((item) => item.toLowerCase().includes(value().toLowerCase()));

  return (
    <div class={styles.wrapper}>
      <div class={styles.row}>
        <Input value={value} setValue={setValue} />
        <Button setSortDirection={setSortDirection} sortDirection={sortDirection} />
      </div>
      <List items={filteredItems} />
    </div>
  );
};
