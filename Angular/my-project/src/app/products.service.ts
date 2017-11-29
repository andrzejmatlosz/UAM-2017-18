import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductsService {

    constructor(private http: Http) {}

    public getProducts(): Observable<Array<{name: string, id: number, details: string}>> {
        return this.http.get('/assets/products.json')
            .map((response: Response) => {
                return response.json();
            });
    }

    public getProduct(id: number): Observable<{name: string, id: number, details: string}> {
        return this.http.get('/assets/products.json')
            .map((response: Response) => {
                const array = response.json();
                return array.find(product => product.id === id);
            });
    }
}