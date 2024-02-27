import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

// 다른 곳에서도 JwtStrategy를 사용할 수 있도록 의존성을 주입.
@Injectable()

export class JwtStrategy extends PassportStrategy(Strategy){
// UserRepository의 값을 가쟈올 것이기 떄문에 의존성 주입.
    constructor( 
        @InjectRepository(UserRepository)
        private userRepository:UserRepository
    ){
        super({
            // 토큰이 유효한지 확인.
            secretOrkey:'Secert1234',

            // 토큰이 AuthHeader에 위치하고 BearerToken 타입인지 확인. 
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    // 위에서 토큰이 유효한지 체크가 되면 validate 메소드에서 payload에 있는 유저이름이 데이터베이스에서 있는 유저인지 확인 후 있다면
    // 유저 객체를 return 값으로 던져 줍니다.
    // return 값은 @UseGuards(AuthGuard())를 이용한 모든 요청의 Request Object에 들어갑니다.
    async validate(payload) {
        const {username} = payload
        const user: User = await this.userRepository.findOne({where:{username}})

        if(!user) {
            throw new UnauthorizedException()
        }
        return user
    }

}