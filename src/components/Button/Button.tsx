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
    setSortDirection(nextDirection);
  };

  return (
    <button onClick={handleClick}>
      {sortDirection() === 'asc' ? <BsSortDown /> : <BsSortDownAlt />}
    </button>
  );
};
