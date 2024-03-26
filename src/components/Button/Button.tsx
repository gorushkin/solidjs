import { Accessor, Setter } from 'solid-js';
import { BsSortDownAlt } from 'solid-icons/bs';
import { BsSortDown } from 'solid-icons/bs';

export const Button = ({
  setSortDirection,
  sortDirection,
}: {
  sortDirection: Accessor<string>;
  setSortDirection: Setter<string>;
}) => {
  const handleClick = () => {
    const nextDirection = sortDirection() === 'asc' ? 'desc' : 'asc';
    console.log('nextDirection: ', nextDirection);
    setSortDirection(nextDirection);
  };

  return (
    <button onClick={handleClick}>
      {sortDirection() === 'desc' ? <BsSortDown /> : <BsSortDownAlt />}
    </button>
  );
};
