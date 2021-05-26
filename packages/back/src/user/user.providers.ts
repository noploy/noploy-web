import { Provider } from "@nestjs/common";
import { Connection } from "typeorm";
import { User } from "./user.entity";

export const userProviders: Provider[] = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['DATABASE_CONNECTION'],
    }
]