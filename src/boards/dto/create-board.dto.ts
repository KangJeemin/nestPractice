//DTO(Data Transfer Object)를 쓰는 이유는 무엇인가
//1. 데이터 유효성을 체크하는데 효율적이다. 2.더 안정적인 코드로 만들어 준다.

//DTO 파일을 작성할 때는 interface가 아닌 class를 사용하여 작성합니다.
//이유는 클래스는 인터페이스와 다르게 런타임에서 작동하기 때문에 파이프 같은 기능을 이용할 때 더 유용합니다. 

export class CreateBoardDto {
    title:string;
    description:string;
}