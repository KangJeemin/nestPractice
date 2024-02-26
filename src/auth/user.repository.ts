import { Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { User } from './user.entity'


export class UserRepository extends Repository<User> {
    
    async createUser(authCredentialsDto:AuthCredentialsDto):Promise<void>{
        try{
            const { username, password }=authCredentialsDto
            const user = this.create({ username,password });
            await this.save(user);
        }
        catch (error) {
            throw new Error(`Failed to create board: ${error.message}`);
        }
        
    }  
}