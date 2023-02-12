import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToMany,
  Check,
} from 'typeorm';
import {Player} from "../player";
import {IWord} from "../word";
import {IGameWord, TGameStatus} from "./game.types";

@Entity('games')
@Check(`"activeTeam" = 'A' OR "activeTeam" = 'B'`)
@Check(`"activeRound" < 4 AND "activeRound" > 0`)
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  adminId: string;

  @Column({ type: 'text', nullable: true })
  title: string;

  @Column({ type: 'jsonb', nullable: true, default: [] })
  words: IWord[];

  @Column({ type: 'text', array: true, nullable: true })
  categories: string[];

  @Column({ type: 'text', nullable: true })
  activeTeam: 'A' | 'B';

  @Column({ nullable: true })
  activeRound: 1 | 2 | 3;

  @Column({ type: 'uuid', nullable: true })
  activePlayerId: string;

  @Column({ type: 'jsonb', nullable: true })
  activeWord: IWord;

  @Column({ type: 'text', default: 'CREATED' })
  status: TGameStatus;

  @Column({ type: 'text', nullable: true })
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';

  @Column({ default: 60 })
  timer: number;

  @Column({ type: 'jsonb', default: [] })
  correctWords: IGameWord[] = [];

  @Column({ type: 'jsonb', default: [] })
  skippedWords: IGameWord[] = [];

  @OneToMany(() => Player, (player) => player.game)
  players: Player[];

  @Column({ type: 'text', default: 'singleplayer' })
  mode: 'singleplayer' | 'multiplayer';

  @Column({ type: 'text', nullable: true })
  winTeam: 'A' | 'B';

  @AfterInsert()
  logCreate() {
    console.log(`New Game Created id : ${this.id}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Game Updated id : ${this.id}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Game Removed id : ${this.id}`);
  }
}
