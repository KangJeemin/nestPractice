import { BaseEntity,Column,Entity,PrimaryGeneratedColumn,Unique } from "typeorm";

// entity의 클래스 이름이 테이블 이름으로 설정됨.
@Entity()

//unique 지정(username에서 중복 된 값이 발생할 경우 데이터베이스 레벨에서 에러 처리.)
@Unique(['username'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username:string; 

    @Column()
    password:string;
}