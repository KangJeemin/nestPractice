import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
    // 의존성 주입
    constructor(private boardsService:BoardsService){}

    @Get('/')
    getAllBoard():Board[]{
        return this.boardsService.getAllBoards();
    }
}
