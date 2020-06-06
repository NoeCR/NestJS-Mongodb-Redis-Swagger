import { ApiProperty } from '@nestjs/swagger';

export class CreateMainDTO {
  @ApiProperty({
    readOnly: true,
    required: true
  })
  name: string;

  @ApiProperty({
    readOnly: true,
    type: [String]
  })
  keywords: string[];

  @ApiProperty({
    readOnly: true,
    type: Number
  })
  price: number;

  @ApiProperty({ 
    enum: ['enabled', 'disabled', 'unavailable'],
    default: 'enabled',
    readOnly: true 
  })
  status: Status;

  @ApiProperty({
    readOnly: true,
    type: Date
  })
  createdAt: Date;
}

export enum Status {
  enabled = 'enabled',
  disabled = 'disabled',
  unavailable = 'unavailable',
}