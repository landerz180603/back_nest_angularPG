import {IsEmail, IsNotEmpty, MaxLength, MinLength} from "class-validator";
import { User } from "../interfaces/user.interface";    

export class LoginAuthDto implements User {
@IsEmail()
@IsNotEmpty()
email: string;
@MaxLength(30)
@MinLength(10)
@IsNotEmpty()
password: string;
}