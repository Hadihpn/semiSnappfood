import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export function TypeOrmConfig(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'HADIh3pn@',
    database: 'semiSnappfood',
    autoLoadEntities: false,
    synchronize: false,
    entities: [
      'dist/**/**/**/*.entity{.ts,.js}',
      'dist/**/**/*.entity{.ts,.js}',
    ],
  };
}
