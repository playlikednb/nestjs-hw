import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (): Promise<Sequelize> => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        logging: false,
        define: {
          timestamps: false
        },
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];