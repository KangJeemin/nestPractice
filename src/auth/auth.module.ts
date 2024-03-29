import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as config from 'config'
const dbConfig = config.get('jwt');
@Module({
  imports :[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret:dbConfig.secret,
      signOptions:{
        expiresIn: dbConfig.expiresIn,
      }
    })
    ,TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  // JwtStrategy를 이 Auth 모듈에서 사용할 수 있도록 등록.
  providers: [AuthService,JwtStrategy,JwtModule],
  // JwtStrategy를 다른 모듈에서도 사용할 수 있게 등록
  exports:[JwtStrategy,PassportModule]
})
export class AuthModule {}
