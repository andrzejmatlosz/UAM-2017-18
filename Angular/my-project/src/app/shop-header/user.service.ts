import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    public getUserName(): string {
        return 'USER NAME FROM SERVICE';
    }
}