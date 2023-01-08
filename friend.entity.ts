import {
  Entity,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  JoinColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import {TFriendStatus} from "./types";
import {UserData} from "./users-data.entity";


@Entity('friends')
export class Friend {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => UserData, { eager: true })
  @JoinColumn({ referencedColumnName: 'userId' })
  friend: UserData;

  @Column({ type: 'text', default: 'WAITING_FOR_REMOTE_USER_APPROVAL' })
  status: TFriendStatus;

  @AfterInsert()
  logCreate() {
    console.log(
      `Created Friend for userId ${this.userId} friendId:${this.friend.userId}:`,
    );
  }

  @AfterUpdate()
  logUpdate() {
    console.log(
      `Updated Friend for userId ${this.userId} friendId:${this.friend.userId}:`,
    );
  }

  @AfterRemove()
  logRemove() {
    console.log(
      `Removed Friend for userId ${this.userId} friendId:${this.friend.userId}:`,
    );
  }
}
