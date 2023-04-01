import { Injectable } from "@nestjs/common";
import { SendMessageUseCase } from '../port/in/SendMessageUseCase';


@Injectable()
export class MessageService implements SendMessageUseCase {

    sendMessage(message: string): void {
        console.log("Message sent. "+message);
    }
    
}