import { IUser } from "./User";

export class Player implements IUser {
  age?: number | undefined;
  name: string;
  highScore: number;

  constructor(name = "", age = 0, highScore = 0) {
    this.name = name;
    this.age = age;
    this.highScore = highScore;
  }

  formatName(): string {
    return this.name.toUpperCase();
  }
}

export interface FormElements extends HTMLFormControlsCollection {
  playerName: HTMLInputElement;
  playerAge: HTMLInputElement;
  factor: HTMLInputElement;
  numProblems: HTMLInputElement;
}

export interface PlayerFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
