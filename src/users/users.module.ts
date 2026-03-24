import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { Role } from 'src/roles/roles.entity';
import { UserRoles } from 'src/roles/user-roles.entity';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, UserRoles]), 
    RolesModule
  ], 
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
