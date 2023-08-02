import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInformationComponent } from './stock-information.component';

describe('StockInformationComponent', () => {
  let component: StockInformationComponent;
  let fixture: ComponentFixture<StockInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockInformationComponent]
    });
    fixture = TestBed.createComponent(StockInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the company name correctly', () => {
    component.stockData = [{ companyName: 'Sample Company', nseListedName: '', bseListedName: '', sector: '', todaysHigh: 0, todaysLow: 0, high52W: 0, low52W: 0, strength: '', weakness: '', opportunities: '', threats: '' }];
    fixture.detectChanges();
    const companyNameElement = fixture.nativeElement.querySelector('.company-name');
    expect(companyNameElement.textContent).toContain('Sample Company');
  });
  
  it('should call onBack() method when the back button is clicked', () => {
    spyOn(component, 'onBack');
    const backButton = fixture.nativeElement.querySelector('.back');
    backButton.click();
    expect(component.onBack).toHaveBeenCalled();
  });
  
});
