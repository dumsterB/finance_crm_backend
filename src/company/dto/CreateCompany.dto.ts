import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional, IsString, IsStrongPassword} from "class-validator";

export class CreateCompanyDto {
    @ApiProperty({example:'Finance Crm',description: 'Название компании'})
    @IsString({ message: 'Название компании должно быть стракой' })
    name: string;

    @ApiProperty({example:'finance_crm',description: 'логин компании'})
    @IsString({ message: 'Логин компании должно быть стракой' })
    login: string;

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

    @ApiProperty({example:['1','2'],description:'branch ids'})
    branch_ids: string[]

}