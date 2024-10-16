import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
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
