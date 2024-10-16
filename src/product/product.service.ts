import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly ProductRepository: Repository<Product>) {}

  async create(product: CreateProductDto) {
    let {name, price, description, quantity } = product
    let newProduct = await this.ProductRepository.create({
      name,
      price,
      description,
      quantity 
    });
    await this.ProductRepository.save(newProduct);
    return newProduct
  }

  findAll() {
    return this.ProductRepository.find();
  }

  async update(id: any, product: UpdateProductDto) {
    let findProduct = await this.ProductRepository.findOneBy({ id });
    if (!findProduct)
      return new HttpException('Product not found', HttpStatus.NOT_FOUND);
    await this.ProductRepository.update({ id }, { ...product });
    return "Product successfully updated"
  }

  async remove(id: any) {
   let findProduct = await this.ProductRepository.findOneBy({ id });
   if (!findProduct)
     return new HttpException('Product not found', HttpStatus.NOT_FOUND);
   await this.ProductRepository.delete( id );
   return "Product successfully deleted"
}
}
