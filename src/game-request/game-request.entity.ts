import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  JoinColumn,
  ManyToOne,
  Unique,
} from 'typeorm';
import {UserData} from "../user-data";
import {Game, TGameRequestStatus} from "../game";

@Entity('games_requests')
@Unique(['from', 'to', 'game'])
export class GameRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  toId: string;

  @ManyToOne(() => UserData)
  @JoinColumn()
  to: UserData;

  @Column({ type: 'uuid' })
  fromId: string;

  @ManyToOne(() => UserData)
  @JoinColumn()
  from: UserData;

  @Column({ type: 'uuid' })
  gameId: string;

  @ManyToOne(() => Game)
  @JoinColumn()
  game: Game;

  @Column({ default: 'PENDING' })
  status: TGameRequestStatus;

  @Column({ type: 'text', nullable: true })
  note: string;

  @AfterInsert()
  logCreate() {
    console.log(
      `Created New Game Request fromId : ${this.fromId} toId : ${this.toId}`,
    );
  }

  @AfterUpdate()
  logUpdate() {
    console.log(
      `Updated Game Request fromId : ${this.fromId} toId : ${this.toId}`,
    );
  }

  @AfterRemove()
  logRemove() {
    console.log(
      `Removed Game Request fromId : ${this.fromId} toId : ${this.toId}`,
    );
  }
}
