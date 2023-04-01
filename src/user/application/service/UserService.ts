import { Inject, Injectable } from "@nestjs/common";
import { UserUseCase } from "../port/in/UserUseCase";
import { MessagePort } from '../port/out/MessagePort';


@Injectable()
export class UserService implements UserUseCase{
    private readonly messagePort;
    constructor(@Inject('MessagePort') messagePort: MessagePort){
        this.messagePort = messagePort;
    }

    callUser(message: string): void {
        this.messagePort.sendMessage(message);
    }

}