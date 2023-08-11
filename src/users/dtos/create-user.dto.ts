import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'examp.new@gmail.com', description: 'Unique email' })
  @IsString({ message: 'Should be string value' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({ example: '3276190', description: 'password' })
  @IsString({ message: 'Should be string value' })
  @Length(4, 16, { message: 'Should be min - 4 and max - 16 char' })
  readonly password: string;
}
