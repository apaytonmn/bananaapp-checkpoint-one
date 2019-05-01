import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';import { AppState, getMyBanana } from '../app.state';
import { GetNewBanana } from './state';

@Component({
    selector: 'app-banana',
    templateUrl: './banana.component.html',
    styleUrls: ['./banana.component.css']
})
export class BananaComponent implements OnInit {

    title = 'My NgRx Banana App';

    banana$: Observable<any>;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
      this.newBanana();
      this.banana$ = this.store.pipe(select(getMyBanana));
    }

    newBanana() {
      this.store.dispatch(new GetNewBanana(null));
    }

    peelBanana() {

    }

    eatBanana() {

    }

    timeHop() {

    }
}
