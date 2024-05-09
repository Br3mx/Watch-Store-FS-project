import { IsString, IsNotEmpty, IsEmail, Length, IsInt } from 'class-validator';
import { Match } from 'src/utils/match.decorator';

export class RegisterDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsInt()
  phone: number;

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  @Match('password')
  passwordRepeat: string;
}
