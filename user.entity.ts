import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Unique,
} from 'typeorm';


@Entity('users')
@Unique(['email', 'provider'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text', select: false, nullable: true })
  password: string;

  @Column({ type: 'text', default: 'email' })
  provider: 'google' | 'email' | 'facebook';

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
