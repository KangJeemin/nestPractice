import { BaseEntity,Column,Entity,PrimaryGeneratedColumn } from "typeorm";

// entity의 클래스 이름이 테이블 이름으로 설정됨.
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username:string; 

    @Column()
    password:string;
}