"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmConfig = TypeOrmConfig;
function TypeOrmConfig() {
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
//# sourceMappingURL=typeorm.config.js.map