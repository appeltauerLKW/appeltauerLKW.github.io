import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filterMode = false;



ngOnInit(): void {
}


filterToggle() {
  this.filterMode = !this.filterMode 
}
}
