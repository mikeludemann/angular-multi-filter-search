import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-multi-filter-search';

	items = [
		{ "id": 1, "name": 'First item' },
		{ "id": 2, "name": 'Second item' },
		{ "id": 3, "name": 'Third item' },
		{ "id": 4, "name": 'Fourth item' },
		{ "id": 5, "name": 'Fivth item' },
		{ "id": 6, "name": 'Sixth item' }
	];
}
