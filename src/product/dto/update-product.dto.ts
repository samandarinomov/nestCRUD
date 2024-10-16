import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsNumber()
    price: Number;
  
    @IsNotEmpty()
    @IsString()
    description: String
  
    @IsNotEmpty()
    @IsNumber()
    quantity: Number
}
