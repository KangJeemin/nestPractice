import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { AuthGuard} from '@nestjs/passport';
import { GetUser } from './get-user.decorater';
import { User } from './user.entity';


@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto):Promise<void>{
        return this.authService.signUp(authCredentialsDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto):Promise<{accessToken:string}>{
        return this.authService.signIn(authCredentialsDto)
    }

    @Post('/test')    
    @UseGuards(AuthGuard())
    test(@GetUser() user:User){
        console.log('user=',user)
    }
    // UseGuards 안에 @nestjs/passport에서 가져온 AuthGuard()를 이용하면 요청안에 유저 정보를 넣어줄 수 있습니다.
    // @Post('/authTest')
    // @UseGuards(AuthGuard()) 
    // authTest(@Req() req){
    //     console.log(req)
    // }
}
