import { Injectable } from '@nestjs/common';


//injectable 데코레이터는 다른 컨포넌트에서 이 서비스를 사용할 수 있게 만들어준다.
@Injectable()
export class BoardsService {}
