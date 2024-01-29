import React, { useContext } from 'react';
import GridBox from 'src/components/Grid/GridBox.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';
import { GameContext } from 'src/contexts/GameProvider.tsx';

interface GridProps {
  letters: string;
  results: string;
}

const GridRow: React.FC<GridProps> = ({ letters, results }) => {
  const [state] = useContext(GameContext);

  return (
    <div className="flex">
      {generateArray(state.word.length).map((value) => (
        <GridBox
          key={value}
          letter={letters.charAt(value) ? letters[value] : ''}
          state={results.charAt(value) ? results[value] : ''}
        />
      ))}
    </div>
  );
};

export default GridRow;
