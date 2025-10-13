import { UpdateUserDto } from './dto/update-user.dto';
import { SendOtpDto } from '../auth/dto/otp.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(createUserDto: SendOtpDto): Promise<UserEntity>;
    findAll(): string;
    findOne(id: number): string;
    findOneByMobile(dto: SendOtpDto): Promise<UserEntity | null>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
