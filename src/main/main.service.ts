import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IMain } from './interfaces/main.interface';
import { CreateMainDTO } from './dto/main.dto';


@Injectable()
export class MainService {
  constructor(@InjectModel('Main') private mainModel: Model<IMain> ) {}

  async create(createMainDTO: CreateMainDTO): Promise<IMain> {
    const main = new this.mainModel(createMainDTO);
    
    return await main.save();
  }

  async getAll(): Promise<IMain[]> {
    const mains = await this.mainModel.find();
    
    return mains;
  }

  async getOneById(mainId: string): Promise<IMain> {
    const main = await this.mainModel.findById(mainId);
    
    return main;
  }

  async update(mainId: string, createMainDTO: CreateMainDTO): Promise<IMain> {
    const updatedMain = await this.mainModel.findByIdAndUpdate(mainId, createMainDTO, { new: true });
    
    return updatedMain;
  }

  async delete(mainId: string): Promise<IMain> {
    const deletedMain = await this.mainModel.findByIdAndDelete(mainId);
    
    return deletedMain;
  }
}
