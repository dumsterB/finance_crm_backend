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

export class CreateWarehouse {
    @ApiProperty({ example: 'Золото', description: 'название товара' })
    @IsOptional()
    @IsString({ message: 'название товара должна быть стракой' })
    name: string;
    @ApiProperty({ example: 20000, description: 'цена товара' })
    @IsOptional()
    price: string;
}
