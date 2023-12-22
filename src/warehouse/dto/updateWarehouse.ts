import {ApiProperty} from "@nestjs/swagger";
import {IsOptional, IsString} from "class-validator";

export class UpdateWarehouse{
    @ApiProperty({ example: 'Золото', description: 'название товара' })
    @IsOptional()
    @IsString({ message: 'название товара должна быть стракой' })
    name: string;

    @ApiProperty({ example: 20000, description: 'цена товара' })
    @IsOptional()
    price: string;
}