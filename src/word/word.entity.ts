import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  Unique,
} from 'typeorm';

@Entity('words')
@Unique(['heb', 'en'])
export class Word {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  heb: string;

  @Column({ type: 'text' })
  en: string;

  @Column({ type: 'text', array: true })
  categories: string[];

  @AfterInsert()
  logCreate() {
    console.log(`Created Word heb : ${this.heb} en : ${this.en}`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Updated Word heb : ${this.heb} en : ${this.en}`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Removed Word heb : ${this.heb} en : ${this.en}`);
  }
}
