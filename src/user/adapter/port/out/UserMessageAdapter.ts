import { Inject, Injectable } from "@nestjs/common";
import { MessagePort } from "src/user/application/port/out/MessagePort";
import { SendMessageUseCase } from '../../../../message/application/port/in/SendMessageUseCase';

@Injectable()
export class UserMessageAdapter implements MessagePort{
    private readonly sendMessageUseCase;
    constructor(@Inject('SendMessageUseCase') sendMessageUseCase: SendMessageUseCase){
        this.sendMessageUseCase = sendMessageUseCase;
    }

    sendMessage(message: string): void {
        try{
            this.sendMessageUseCase.sendMessage(message) ;
        }catch(e){
            console.log(e);
        }
    }

}