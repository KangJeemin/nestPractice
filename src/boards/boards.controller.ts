import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { CreateBoardDto } from './\bdto/create-board.dto';

@Controller('boards')
export class BoardsController {
    // 의존성 주입
    constructor(private boardsService:BoardsService){}

    @Get('/')
    getAllBoard():Board[]{
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() CreateBoardDto:CreateBoardDto
    ):Board{
        return this.boardsService.createBoard(CreateBoardDto)
    }

    @Get('/:id')
    getBoardById(@Param('id') id:string):Board{ 
        return this.boardsService.getBoardById(id)
    }
    
    @Delete('/:id')
    deleteBoard(@Param('id') id:string):void{
        return this.boardsService.deleteBoard(id)
    }

    


    

}
