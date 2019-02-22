import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from 'src/app/dog.service';
import { Subscription } from 'rxjs';
import { Dog } from 'src/app/models/dog.model';

@Component({
    selector: 'app-dog-view',
    templateUrl: './dog-view.component.html',
    styleUrls: ['./dog-view.component.scss']
})
export class DogViewComponent implements OnInit, OnDestroy {
    dog: Dog;
    routeSubscription: Subscription;
    constructor(
        private activatedRoute: ActivatedRoute,
        private dogs: DogService
    ) {}

    ngOnInit() {
        this.routeSubscription = this.activatedRoute.params.subscribe(
            params => {
                // tslint:disable-next-line:no-string-literal
                const dogId = +params['dogId'];
                this.dogs.getDog(dogId).subscribe(
                    r => {
                        this.dog = r;
                    },
                    e => {}
                );
            }
        );
    }

    onDelete(dog: Dog) {
        alert('Delete request received for ' + dog.name);
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
    }
}
