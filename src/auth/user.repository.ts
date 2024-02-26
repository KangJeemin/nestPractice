import { getRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { User } from './user.entity'

export class UserRepository {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getRepository(User);
    }

    async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        try {
            const { username, password } = authCredentialsDto;
            const user = this.userRepository.create({ username, password });
            await this.userRepository.save(user);
        } catch (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }
}
