import {Component, Input} from '@angular/core';
import {CompanyProfile} from '../app/modules/dashboard/search/profile.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  template: '',
})
export class MockSearchComponent  {
}

@Component({
  selector: 'app-profile',
  template: '',
})
export class MockProfileComponent  {
  @Input() profile$: Observable<CompanyProfile>;
}
