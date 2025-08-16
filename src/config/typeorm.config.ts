import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export function TypeOrmConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    password: 'HADIh3pn',
    username: 'postgres',
    database: 'semiSnappfood',
    autoLoadEntities: false,
    synchronize: false,
    entities: [
      'dist/**/**/**/*.entity{.ts,.js}',
      'dist/**/**/*.entity{.ts,.js}',
    ],
  };
}
