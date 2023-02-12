import { IsString } from 'class-validator';
export class CreateGameDTO {
  @IsString()
  userId: string;
}
