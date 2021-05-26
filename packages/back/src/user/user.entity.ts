import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 120})
    name: string;

    @Column({length: 60})
    email: string;

    @Column('varchar')
    password: string;

    @Column('varchar')
    access_token: string;

    @Column('varchar')
    refresh_token: string;

    @Column('int')
    status: number;

    @Column('boolean')
    sended_eamil: boolean;

}