import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/users.entity';

@Entity({ name: 'roles' })
export class Role {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Уникальное значение роли' })
  @Column({ type: 'varchar', unique: true, nullable: false })
  value: string;

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column({ type: 'varchar', nullable: true })
  description: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
