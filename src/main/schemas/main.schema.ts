import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Main extends Document {
  @Prop()
  name: string;

  @Prop()
  keywords: string[];

  @Prop()
  price: number;

  @Prop()
  status: string;

  @Prop()
  createdAt: Date;
}

export const MainSchema = SchemaFactory.createForClass(Main);