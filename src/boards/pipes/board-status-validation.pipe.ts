import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";
export class BoardStatusValidationPipe implements PipeTransform{
    /*
     transForm() 메소드
     첫번째 파라미터는 처리가 안 된 인자의 값(value)이며 
     두번째 파라미터는 인자에 대한 메타데이터를 포함한 객체 입니다.

     transform() 메소드에서 Return 된 값은 Route 핸들러로 전해집니다.
     만약 예외(Exception)가 발생하면 클라이언트에 바로 전해집니다.\
     */

     /*
     접두사 (prifix) readonly는 속성을 읽기 전용으로 만드는데 사용 됩니다. 앍가 전용 클래스는 외부에서 엑세스 할수 있지만 값을 수정할 수는 없습니다.
     */
    readonly StatusOption = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
]
    transform(value: any) {
        value = value.toUpperCase();

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} isn't in the status`)
        }
        return value;
    }

    private isStatusValid(status:any){
        const index=this.StatusOption.indexOf(status);
        return index !== -1
    }

}