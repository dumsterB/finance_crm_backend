import {ApiProperty} from "@nestjs/swagger";
import {IsOptional, IsString} from "class-validator";

export class GetWarehouses{
    @ApiProperty({
        required: false,
        example: 'Золота',
        description: 'название товара',
    })
    @IsOptional()
    @IsString({ message: 'название товара должно быть стракой' })
    name: string;
    @ApiProperty({
        required: false,
        example: 2000,
        description: 'Цена товара',
    })
    @IsOptional()
    price: string;
}