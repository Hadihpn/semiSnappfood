import { Repository } from 'typeorm';
import { OTPEntity } from './entities/otp.entity';
import { CreateOtpDto } from './dto/create-otp.dto';
import { UpdateOtpDto } from './dto/update-otp.dto';
export declare class OtpService {
    private otpRepository;
    constructor(otpRepository: Repository<OTPEntity>);
    create(createOtpDto: CreateOtpDto): Promise<OTPEntity>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOtpDto: UpdateOtpDto): Promise<void>;
    remove(id: number): string;
}
