import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository:UserRepository,
    ){}
    async signUp(authCredentialsDto:AuthCredentialsDto):Promise<void> {
            try{
                const { username, password }= authCredentialsDto
                const user = this.userRepository.create({ username,password });
                await this.userRepository.save(user);
            }
            catch (error) {
                throw new Error(`Failed to create board: ${error.message}`);
            }
            
        }  
    }
