import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./user.entity";

export const GetUser = createParamDecorator((data,ctx:ExecutionContext):User=>{
    const req = ctx.switchToHttp().getRequest()
    // req에는 
    return req.user
})