import { Body, Controller, Delete, Get, Param, Post, Patch, UsePipes, ValidationPipe, ParseIntPipe, UseGuards, Logger } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './\bdto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorater';
import { User} from '../auth/user.entity'

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
    private  logger = new Logger('BoardController');
    // 의존성 주입
    constructor(private boardsService:BoardsService){}



    // @Get('/')
    // getAllBoard():Board[]{
    //     return this.boardsService.getAllBoards();
    // }
    @Get()
    getAllBoards(
        @GetUser() user:User
    ):Promise<Board[]>{
        this.logger.verbose(`User ${user.username} trying to get all Board`)
        return this.boardsService.getAllBoards(user)
    }



    @Post()
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto:CreateBoardDto, @GetUser() user:User):Promise<Board> {
        this.logger.verbose(`User ${user.username} creating a new board. payload: ${JSON.stringify(createBoardDto)}`)
        return this.boardsService.createBoard(createBoardDto,user)
    }
    // @Post()
    // @UsePipes(ValidationPipe)
    // createBoard(
    //     @Body() CreateBoardDto:CreateBoardDto
    // ):Board{
    //     return this.boardsService.createBoard(CreateBoardDto)
    // }

    @Get('/:id')
    getBoardById(@Param('id') id:number) : Promise<Board> {
        return this.boardsService.getBoardById(id)
    }
    // @Get('/:id')
    // getBoardById(@Param('id') id:string):Board{ 
    //     return this.boardsService.getBoardById(id)
    // }
    @Delete('/:id')
    deleteBoard(@Param('id',ParseIntPipe) id:number, @GetUser() user:User):Promise<void>{
        return this.boardsService.deleteBoard(id,user)
    }
    // @Delete('/:id')
    // deleteBoard(@Param('id') id:string):void{
    //     return this.boardsService.deleteBoard(id)
    // }
    @Patch('/:id')
    updataBoardSatus(@Param('id', ParseIntPipe) id:number,@Body('status',BoardStatusValidationPipe) status:BoardStatus):Promise<Board>{
        return this.boardsService.updateBoardStatus(id,status);
    }
    // @Patch('/:id/status')
    // updateBoardStatus(@Param('id') id:string, @Body('status',BoardStatusValidationPipe) status:BoardStatus){
    //     return this.boardsService.updateBoardStatus(id,status)

    // }

    


    

}
