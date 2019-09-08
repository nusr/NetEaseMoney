export enum LogType {
  changed,
  added,
  deleted,
  array,
}
type DictionaryType = {
  color: string;
  text: string;
};
const dictionary: DictionaryType[] = [
  {
    color: '#2196F3',
    text: 'CHANGED:',
  },
  {
    color: '#4CAF50',
    text: 'ADDED:',
  },
  {
    color: '#F44336',
    text: 'DELETED:',
  },
  {
    color: '#2196F3',
    text: 'ARRAY:',
  },
];
export function style(kind: LogType): string {
  return `color: ${dictionary[kind].color}; font-weight: bold`;
}

export default function logger(
  kind: LogType,
  output: string[],
  logger = console,
) {
  logger.log(`%c ${dictionary[kind].text}`, style(kind), ...output);
}
