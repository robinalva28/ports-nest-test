import { Body, Controller, Inject, Post } from "@nestjs/common";
import { UserUseCase } from '../../../application/port/in/UserUseCase';

interface MessageDTO {
    message: string;
}

@Controller('users')
export class UserController {
    private readonly userUseCase;
    constructor(@Inject('UserUseCase') userUseCase: UserUseCase) {
        this.userUseCase = userUseCase;
    }

    @Post()
    userMessage(@Body() messagebody: MessageDTO) {
        this.userUseCase.callUser(messagebody.message);
        return 'OK';
    }


}
