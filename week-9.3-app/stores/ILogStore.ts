export default interface ILogStore {
  logs: string[];
  log(message: string): void;
}