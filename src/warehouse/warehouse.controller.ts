import {Body, Controller, Get, Post, Query} from "@nestjs/common";
import {WarehouseService} from "./warehouse.service";
import {ApiOperation,ApiResponse,ApiTags} from "@nestjs/swagger";
import {Warehouse} from "./warehouse.entity";
import {CreateWarehouse} from './dto/createWarehouse'
@ApiTags('Warehouse')
@Controller('Warehouse')
export class WarehouseController {
    constructor(private readonly warehouseService: WarehouseService) {}
    @ApiOperation({ summary: 'Get all Warehouse' })
    @ApiResponse({
        status: 200,
        type: [Warehouse],
        description: 'The list of Warehouse',
    })
    @Get('/')
    getOutcome(query:any){
        return this.warehouseService.getAllWarehouse(query)
    }

    @ApiOperation({ summary: 'Create a new Warehouse' })
    @ApiResponse({
        status: 200,
        type: [Warehouse],
        description: 'create a warehouse',
    })
    @Post('/')
   async createWarehouse(@Body() CreateWarehouse: CreateWarehouse){
        try {
            const res = await this.warehouseService.createWarehouse(CreateWarehouse);
            return res;
        } catch (error) {
            throw new Error('Warehouse not created:' + error.message);
        }
    }
}