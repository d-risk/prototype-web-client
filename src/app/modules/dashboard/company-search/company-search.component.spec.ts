import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

import {CompanySearchComponent} from './company-search.component';
import {CompanyNameSearchService} from './company-name-search.service';
import {createMockCompanyNameSearchService, createMockCompanyReportSearchService} from '../../../../testing/mock-stub.spec';
import {ProfileSearchService} from './profile-search.service';

describe('CompanySearchComponent', () => {
  let component: CompanySearchComponent;
  let fixture: ComponentFixture<CompanySearchComponent>;
  let mockCompanyNameSearchService: CompanyNameSearchService;
  let mockCompanyReportSearchService: ProfileSearchService;

  beforeEach(async(() => {
    mockCompanyNameSearchService = createMockCompanyNameSearchService();
    mockCompanyReportSearchService = createMockCompanyReportSearchService();

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,

        MatAutocompleteModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
      ],
      declarations: [CompanySearchComponent],
      providers: [
        {provide: CompanyNameSearchService, useValue: mockCompanyNameSearchService},
        {provide: ProfileSearchService, useValue: mockCompanyReportSearchService},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
