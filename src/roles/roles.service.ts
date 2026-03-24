import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './roles.entity';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async createRole(dto: CreateRoleDto) {
    const role = this.roleRepository.create(dto);
    return this.roleRepository.save(role);
  }

  async getRoleByValue(value: string) {
    return this.roleRepository.findOne({ where: { value } });
  }
}
