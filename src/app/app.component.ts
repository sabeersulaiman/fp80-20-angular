import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DogService } from './dog.service';
import { Dog } from './models/dog.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    dogList: Dog[] = [];
    exDate = new Date();

    someFunc() {
        console.log('Function called.');
    }
}
