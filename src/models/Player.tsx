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
