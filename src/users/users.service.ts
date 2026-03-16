import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async createUser(dto: CreateUserDto) { 
        const user = this.userRepository.create(dto);
        return this.userRepository.save(user);
    }

    async getAllUsers() { 
        return this.userRepository.find();
    }
}
