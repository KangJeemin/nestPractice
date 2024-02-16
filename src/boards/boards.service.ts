import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid'
import { CreateBoardDto } from './\bdto/create-board.dto';

//injectable 데코레이터는 다른 컨포넌트에서 이 서비스를 사용할 수 있게 만들어준다.
@Injectable()
export class BoardsService {
    // 다른 클래스에서 board의 접근을 막음
    private boards:Board[]=[];

    getAllBoards():Board[] {
        return this.boards;
    }

    createBoard(CreateBoardDto:CreateBoardDto) {
        const {title,description} =CreateBoardDto
        const board:Board = {
            id:uuid(),
            title,
            description,
            status:BoardStatus.PUBLIC
        }
        this.boards.push(board);
        return board;
    }
    
    getBoardById(id:string):Board {
        return this.boards.find((board)=> board.id ===id)
    }
}
 