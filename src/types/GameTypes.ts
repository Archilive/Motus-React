export enum LetterState {
  OK = 'v',
  WRONG = 'x',
  MISPLACED = '_',
}

export interface ApiWord {
  name: string,
  categotie: string
}

export enum MessageType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}

export interface Message {
  content: string;
  type: MessageType
}
