import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Unique, ManyToOne, JoinColumn,
} from 'typeorm';
import {Game} from "../game/game.entity";

@Entity('users-data')
@Unique(['email', 'provider', 'userId'])
export class UserData {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text' })
  firstName: string;
  @Column({ type: 'text' })
  lastName: string;
  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text', default: 'email' })
  provider: 'google' | 'email' | 'facebook';

  @Column({ type: 'text', default: '0' })
  vaultAccountId:string;

  @Column({ type: 'uuid', unique: true, nullable: true })
  userId: string;


  @ManyToOne(() => Game, { nullable: true, eager: true })
  @JoinColumn()
  activeGame: Game;

  @Column({ type: 'text', nullable: true })
  profilePic: string;

  @AfterInsert()
  logCreate() {
    console.log('Created User with id:', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id:', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with id:', this.id);
  }
}
