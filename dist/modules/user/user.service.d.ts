import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SendOtpDto } from '../auth/dto/otp.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { OtpService } from './otp.service';
export declare class UserService {
    private userRepository;
    private otpService;
    constructor(userRepository: Repository<UserEntity>, otpService: OtpService);
    create(createUserDto: CreateUserDto): Promise<UserEntity>;
    findAll(): string;
    findOne(id: number): string;
    findOneByMobile(dto: SendOtpDto): Promise<UserEntity | null>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
