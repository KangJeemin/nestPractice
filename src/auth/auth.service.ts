import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository:UserRepository,
        // auth 모듈에 JWT를 등록해주었기 떄문에 Service에서 JWT를 가져올 수 있다. 
        private jwtService:JwtService
    ){}
    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void> {
            
        const { username, password }= authCredentialsDto
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password,salt)

        const user = this.userRepository.create({ username,password:hashedPassword });
        try{
            await this.userRepository.save(user);
        } catch(error) {
            if(error.code === '23505') {
                throw new ConflictException('Existing username')
            }
            else{
                throw new InternalServerErrorException();
            }
        }
                
        }
    async signIn(authCredentialsDto:AuthCredentialsDto):Promise<{accessToken:string}> {
        const { username, password}= authCredentialsDto
        const user = await this.userRepository.findOne({where:{username}});

        if(user && (await bcrypt.compare(password,user.password))){
            // 유저 토큰 생성 (secret + payload )
            // payload 에는 중요한 정보를 넣으면 안 됨.( 탈취 가능성 ) 
            const payload = { username };
            // secret 과 payload를 합쳐서 토큰을 생성함.
            const accessToken =await this.jwtService.sign(payload);

            return { accessToken }
        } 
        else{
            throw new UnauthorizedException('login failed');
        }
    }
            
        } 