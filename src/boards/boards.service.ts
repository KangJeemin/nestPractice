import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid'
import { CreateBoardDto } from './\bdto/create-board.dto';

//injectable 데코레이터는 다른 컨포넌트에서 이 서비스를 사용할 수 있게 만들어준다.
@Injectable()
export class BoardsService {
    // 다른 클래스에서 board의 접근을 막음
    // private boards:Board[]=[];

    // getAllBoards():Board[] {
    //     return this.boards;
    // }

    // createBoard(CreateBoardDto:CreateBoardDto) {
    //     const {title,description} =CreateBoardDto
    //     const board:Board = {
    //         id:uuid(),
    //         title,
    //         description,
    //         status:BoardStatus.PUBLIC
    //     }
    //     this.boards.push(board);
    //     return board;
    // }
    
    // getBoardById(id:string):Board {
    //     const found= this.boards.find((board)=> board.id ===id)

    //     if(!found){
    //         throw new NotFoundException(`Can't find Board with id=${id}`);
    //     }
    //     return found;
    // }

    // deleteBoard(id:string): void{
    //     const found = this.getBoardById(id)
    //     this.boards = this.boards.filter((board)=> board.id !== found.id);
    // }

    // updateBoardStatus(id:string, status:BoardStatus):Board {
    //     const board = this.getBoardById(id) 
    //     board.status=status;
    //     return board;
    // }
}
 