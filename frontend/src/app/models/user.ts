import { RegisterData } from 'angular-token';

export interface UserRegister extends RegisterData {
/* RegisterData
    login: string;
    password: string;
    passwordConfirmation: string;
    name?: string;
    userType?: string; */
    nickname?: string;
}

export interface User {
    id: number;
    email: string;
    nickname?: string;
    image?: string;
}
