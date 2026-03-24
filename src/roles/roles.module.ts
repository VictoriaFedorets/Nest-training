import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles.entity';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { User } from 'src/users/users.entity';
import { UserRoles } from './user-roles.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Role, User, UserRoles])],
    controllers: [RolesController],
    providers: [RolesService],
    exports: [
        RolesService
      ]
})
export class RolesModule {}
