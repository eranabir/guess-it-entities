import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import {Game} from "../game/game.entity";
import {UserData} from "../user-data/users-data.entity";


@Entity('players')
@Unique(['user', 'game'])
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  gameId: string;

  @ManyToOne(() => Game, (game) => game.players)
  @JoinColumn()
  game: Game;

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => UserData, { eager: true })
  @JoinColumn()
  user: UserData;

  @Column({ default: 'PENDING' })
  status: string;

  @Column()
  team: string;

  @Column()
  round: number;

  @Column({ default: false })
  isAdmin: boolean;

  @AfterInsert()
  logCreate() {
    console.log(
      `Created New Player userId : ${this.userId} for Game gameId : ${this.gameId}`,
    );
  }

  @AfterUpdate()
  logUpdate() {
    console.log(
      `Updated Player userId : ${this.userId} for Game gameId : ${this.gameId}`,
    );
  }

  @AfterRemove()
  logRemove() {
    console.log(
      `Removed Player userId : ${this.userId} for Game gameId : ${this.gameId}`,
    );
  }
}
