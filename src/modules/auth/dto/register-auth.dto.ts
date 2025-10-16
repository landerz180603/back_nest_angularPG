import { PartialType } from "@nestjs/mapped-types"; 
import { LoginAuthDto } from "./login-auth.dto";
import {IsEmail, IsNotEmpty, MaxLength, MIN_LENGTH, MinLength} from "class-validator";


export class RegisterAuthDto extends PartialType (LoginAuthDto) {
id?: number;
@IsNotEmpty()
username: string;
@IsNotEmpty()
@IsEmail()
email: string;
@IsNotEmpty()
@MaxLength(30)
@MinLength(10)
password: string;
}
