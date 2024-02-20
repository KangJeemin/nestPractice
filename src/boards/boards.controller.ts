import { Body, Controller, Delete, Get, Param, Post, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './\bdto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    // 의존성 주입
    // constructor(private boardsService:BoardsService){}

    // @Get('/')
    // getAllBoard():Board[]{
    //     return this.boardsService.getAllBoards();
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() CreateBoardDto:CreateBoardDto
    // ):Board{
    //     return this.boardsService.createBoard(CreateBoardDto)
    // }

    // @Get('/:id')
    // getBoardById(@Param('id') id:string):Board{ 
    //     return this.boardsService.getBoardById(id)
    // }
    
    // @Delete('/:id')
    // deleteBoard(@Param('id') id:string):void{
    //     return this.boardsService.deleteBoard(id)
    // }

    // @Patch('/:id/status')
    // updateBoardStatus(@Param('id') id:string, @Body('status',BoardStatusValidationPipe) status:BoardStatus){
    //     return this.boardsService.updateBoardStatus(id,status)

    // }

    


    

}
