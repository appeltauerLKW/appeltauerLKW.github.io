import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

    triggerEvent() {
      let url = 'http://innoeva-pricing-broker-cc-cmp.test.lkw-walter.com/innoeva-pricing-broker-cc-cmp/api/reloadConfigs';
      let body = {}
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic cHJpY2luZy1icm9rZXItdGVzdDppU2ZhREtWSGQ4eDhjWlkzaGlkdThtY1g='
        }
      })
      .then((response) => response.json())
      .then(json => {
        // Handle the response here
      }); 
    }
}
