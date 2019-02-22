import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/dog.service';
import { Dog } from 'src/app/models/dog.model';

@Component({
    selector: 'app-dog-list',
    templateUrl: './dog-list.component.html',
    styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent {
    dogList: Dog[];

    constructor(private dogs: DogService) {
        const done = localStorage.getItem('done-add');
        if (done === 'true') {
        } else {
            this.dogs
                .addDog({
                    name: 'Terrier',
                    age: 10,
                    description: 'Some Description'
                })
                .subscribe(r => {});
            this.dogs
                .addDog({
                    name: 'Dobberman',
                    age: 10,
                    description: 'Some Description'
                })
                .subscribe(r => {});
            this.dogs
                .addDog({
                    name: 'sj',
                    age: 10,
                    description: 'Some Description'
                })
                .subscribe(r => {});
            this.dogs
                .addDog({
                    name: 'sjs',
                    age: 10,
                    description: 'Some Description'
                })
                .subscribe(r => {});

            localStorage.setItem('done-add', 'true');
        }

        dogs.listDogs().subscribe(r => {
            this.dogList = r.data;
        });
    }

    increaseAge(age: number) {
        return age + 2;
    }
}
