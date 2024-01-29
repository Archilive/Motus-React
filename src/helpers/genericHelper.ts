import { LetterState } from 'src/types/GameTypes.ts';

export const generateArray = (size: number) => (
  Array.from(Array(size).keys())
);

export const formatWord = (word: string) => (
  word
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toUpperCase()
);

export const getStateAttempts = (copy: string, WORD: string) => (
  copy.split('').map((letter, index) => {
    if (letter === WORD[index]) {
      return LetterState.OK;
    }

    if (WORD.includes(letter)) {
      return LetterState.MISPLACED;
    }

    return LetterState.WRONG;
  }));
