import { ApiProperty } from '@nestjs/swagger';

import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'User fullName' })
  @IsOptional()
  @IsString({ message: 'fullName must be a valid string' })
  fullName: string;


  @ApiProperty({ example: '+998 99 999 99 99', description: 'Main phone' })
  @IsNotEmpty({ message: 'mainPhone is required' })
  @IsString({ message: 'phone must be a valid string' })
  phone: string;

  // @ApiProperty({ example: 1 })
  // @IsNotEmpty({ message: 'branch is required' })
  // branch: number;

  @ApiProperty({
    example: 1,
    description: 'id компании',
  })
  company_id: string;

  @ApiProperty({
    example: 'password',
    description: 'User password',
  })
  @IsNotEmpty({ message: 'Password is required' })
  @IsStrongPassword(
    {
      minLength: 5,
      minLowercase: 0,
      minUppercase: 0,
      minNumbers: 0,
      minSymbols: 0,
    },
    { message: 'Password is too weak' },
  )
  @IsString({ message: 'Password must be a valid string' })
  password: string;

  @ApiProperty({
    example: '1',
    description: 'User branchId',
  })
  @IsNotEmpty({ message: 'branchId is required' })
  @IsString({ message: 'branchId must be a valid string' })
  branch_id: string;
}
