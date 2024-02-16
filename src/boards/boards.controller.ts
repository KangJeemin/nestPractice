import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    // 의존성 주입
    constructor(private boardsService:BoardsService){}

    @Get()
    getAllBoard(){
        return this.boardsService.getAllBoards();
    }
}
