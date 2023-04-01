import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MessageModule,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
