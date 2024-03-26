import { Accessor, Setter } from 'solid-js';
import { BsSortDownAlt } from 'solid-icons/bs';
import { BsSortDown } from 'solid-icons/bs';
import styles from './Button.module.scss';

export const Button = ({
  setSortDirection,
  sortDirection,
}: {
  sortDirection: Accessor<string>;
  setSortDirection: Setter<string>;
}) => {
  const handleClick = () => {
    const nextDirection = sortDirection() === 'asc' ? 'desc' : 'asc';
    setSortDirection(nextDirection);
  };

  return (
    <button class={styles.button} onClick={handleClick}>
      {sortDirection() === 'desc' ? (
        <BsSortDown class={styles.icon} />
      ) : (
        <BsSortDownAlt class={styles.icon} />
      )}
    </button>
  );
};
