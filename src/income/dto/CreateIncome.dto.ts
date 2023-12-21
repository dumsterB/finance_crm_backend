import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsOptional, IsString} from "class-validator";

export class CreateIncomeDto{
    @ApiProperty({example:'Обручальное кальцо',description: 'Название товара'})
    @IsOptional()
    @IsString({ message: 'Название товара должно быть стракой' })
    name: string;

    @ApiProperty({example:12000,description: 'Цена товара'})
    @IsOptional()
    price: string;
}