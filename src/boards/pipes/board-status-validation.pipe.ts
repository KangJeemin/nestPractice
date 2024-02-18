import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../boards.model";
export class BoardStatusValidationPipe implements PipeTransform{
    /*
     transForm() 메소드
     첫번째 파라미터는 처리가 안 된 인자의 값(value)이며 
     두번째 파라미터는 인자에 대한 메타데이터를 포함한 객체 입니다.

     transform() 메소드에서 Return 된 값은 Route 핸들러로 전해집니다.
     만약 예외(Exception)가 발생하면 클라이언트에 바로 전해집니다.\
     */

    readonly StatusOption = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
]
    transform(value: any, metadata: ArgumentMetadata) {
        return value
    }

}