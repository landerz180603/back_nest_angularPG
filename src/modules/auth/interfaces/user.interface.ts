import { AuthController } from "../auth.controller";

export interface User { 
    id?: number;
    name?: string;
    password: string;
    email: string;
}

