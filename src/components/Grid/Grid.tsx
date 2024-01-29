import React, { useContext } from 'react';
import GridRow from 'src/components/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';
import { GameContext } from 'src/contexts/GameProvider.tsx';
import { NB_ATTEMPTS } from 'src/config/GameConfig';

// interface GridProps {
//   length: number;
//   attempts: string[];
//   result: string[];
// }

const Grid: React.FC = () => {
  // const { length, attempts, result } = props;
  const [state] = useContext(GameContext);

  return (
    <div className="flex justify-center items-center flex-col">
      {generateArray(NB_ATTEMPTS).map((value) => (
        <GridRow
          key={value}
          // length={length}
          letters={value in state.attempts ? state.attempts[value] : ''}
          results={value in state.results ? state.results[value] : ''}
        />
      ))}
    </div>
  );
};

export default Grid;
