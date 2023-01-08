import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', unique: true })
  category: string;

  @AfterInsert()
  logCreate() {
    console.log(`Created Category : ${this.category}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Updated Category : ${this.category}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Removed Category : ${this.category}`);
  }
}
