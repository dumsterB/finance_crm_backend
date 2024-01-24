import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional, IsString, IsStrongPassword} from "class-validator";

export class CreateBranchDto {
    @ApiProperty({example:'Finance Crm',description: 'Название компании'})
    @IsString({ message: 'Название компании должно быть стракой' })
    name: string;

    @ApiProperty({
        example: 'companyId',
        description: 'Branch companyId',
    })
    @IsNotEmpty({ message: 'companyId is required' })
    @IsString({ message: 'companyId must be a valid string' })
    companyId: string;

}