import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { User } from '../users/users.entity';
import { Role } from './roles.entity';

@Entity({ name: 'user_roles' })
@Unique(['roleId', 'userId'])
export class UserRoles {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @ApiProperty({ example: '1', description: 'ID роли' })
  @Column({ type: 'int', nullable: false })
  roleId: number;

  @ApiProperty({ example: '1', description: 'ID пользователя' })
  @Column({ type: 'int', nullable: false })
  userId: number;

  @ManyToOne(() => Role, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}