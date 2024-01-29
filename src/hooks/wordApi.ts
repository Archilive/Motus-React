import { get } from 'src/hooks/Call.ts';
import { ApiWord } from 'src/types/GameTypes.ts';

export const getRandomWord = async () => (
  get<ApiWord[]>('https://trouve-mot.fr/api/random')
);
