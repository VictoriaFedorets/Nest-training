import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../roles/roles.entity';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
  @Column({ type: 'varchar', unique: true })
  email: string;

  @ApiProperty({example: '12345678', description: 'Пароль'})
  @Column({ type: 'varchar' })
  password: string;

  @ApiProperty({example: false, description: 'Заблокирован ли пользователь'})
  @Column({ type: 'boolean', default: false })
  banned: boolean;

  @ApiProperty({example: 'За нарушение правил', description: 'Причина блокировки'})
  @Column({ type: 'varchar', nullable: true })
  banReason: string | null;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({ name: 'user_roles' })
  roles: Role[];
}

