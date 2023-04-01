import { Module } from '@nestjs/common';
import { SendMessageUseCase } from './application/port/in/SendMessageUseCase';
import { MessageService } from './application/service/MessageService';

@Module({
  imports: [],
  controllers: [],
  providers: [ 
    {
    provide: 'SendMessageUseCase',
    useClass: MessageService
  }
],
  exports: ['SendMessageUseCase']
})
export class MessageModule {}
