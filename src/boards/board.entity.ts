import { BaseEntity,PrimaryGeneratedColumn,Column, Entity } from "typeorm";
import { BoardStatus } from "./boards.model";

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
    descrition: string;

    @Column()
    status:BoardStatus
}