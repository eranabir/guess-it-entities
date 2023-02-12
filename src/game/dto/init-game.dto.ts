import { IsIn, IsString } from 'class-validator';

export class InitGameDTO {
  @IsIn(['HARD', 'MEDIUM', 'EASY'])
  difficulty: 'HARD' | 'MEDIUM' | 'EASY';
  @IsString({ each: true })
  categories: string[];
  @IsString({ each: true })
  usersIds: string[];
  @IsString()
  title: string;
  @IsString()
  mode: 'singleplayer' | 'multiplayer';
}
