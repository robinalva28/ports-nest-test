import { Module } from '@nestjs/common';
import { MessageModule } from 'src/message/message.module';
import { UserController } from './adapter/port/in/UserController';
import { UserMessageAdapter } from './adapter/port/out/UserMessageAdapter';
import { UserService } from './application/service/UserService';

@Module({
  imports: [MessageModule],
  controllers: [UserController],
  providers: [
    {
      provide: 'MessagePort',
      useClass: UserMessageAdapter
    }
    , {
      provide: 'UserUseCase',
      useClass: UserService
    }
  ],
})
export class UserModule { }
