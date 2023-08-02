import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEngineComponent } from './search-engine.component';
import { Router } from '@angular/router';

describe('SearchEngineComponent', () => {
  let component: SearchEngineComponent;
  let fixture: ComponentFixture<SearchEngineComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchEngineComponent]
    });
    fixture = TestBed.createComponent(SearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /stockInformation when the first option is selected', () => {
    const navigateSpy = spyOn(router, 'navigateByUrl');
    const inputElement = fixture.nativeElement.querySelector('.search-control');
    inputElement.value = 'Oil & Natural Gas Corporation Limited';
    inputElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(navigateSpy).toHaveBeenCalledWith('/stockInformation');
  });
  
  it('should handle the case when the datalist is not present', () => {
    const navigateSpy = spyOn(router, 'navigateByUrl');
    component.onSearchClick(new Event('click'));
    fixture.detectChanges();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

});
