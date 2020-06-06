import { Document } from 'mongoose';

export interface IMain extends Document {
  readonly name: string;
  readonly keywords: string[];
  readonly price: number;
  readonly status: string;
  readonly createdAt: Date;
}
