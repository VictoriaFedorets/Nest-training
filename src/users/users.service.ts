import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly roleService: RolesService,
      ) {}

    async createUser(dto: CreateUserDto) { 
        const user = this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("USER")
        if (!role) {
            throw new Error('Role not found');
          }
          user.roles = [role];
        return this.userRepository.save(user);
    }

    async getAllUsers() { 
        return this.userRepository.find({ 
            relations: ['roles'],
        });
    }
}
