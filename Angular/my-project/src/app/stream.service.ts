import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core'

@Injectable()
export class StreamService {
    private stream: Subject<string> = new Subject<string>();

    public getStream(): Observable<string> {
        return this.stream.asObservable();
    }

    public publishData(value: string): void {
        this.stream.next(value);
    }
}