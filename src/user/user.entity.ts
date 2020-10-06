import { Table, Column, Model, AutoIncrement } from 'sequelize-typescript';

@Table({ tableName: 'accounts' })
export class User extends Model<User> {
  @AutoIncrement
  @Column({ primaryKey: true })
  id: number

  @Column({ unique: true })
  username: string

  @Column
  password: string

  @Column
  created_on: Date 
}