import { Injectable } from '@angular/core';
import { AppModule } from './app.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Dog, DogList } from './models/dog.model';

@Injectable({
    providedIn: 'root'
})
export class DogService {
    baseUrl = 'http://rem-rest-api.herokuapp.com/api/dogs/';
    constructor(private http: HttpClient) {}

    listDogs() {
        const queryParams = new HttpParams()
            .set('limit', 100 + '')
            .set('offset', 0 + '');

        return this.http.get<DogList>(this.baseUrl, {
            params: queryParams,
            withCredentials: true
        });
    }

    addDog(dog: Dog) {
        return this.http.post<Dog>(this.baseUrl, dog, {
            withCredentials: true
        });
    }

    getDog(id: number) {
        return this.http.get<Dog>(this.baseUrl + id, { withCredentials: true });
    }
}
