import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherRootComponent } from './weather-root.component';

describe('WeatherRootComponent', () => {
  let component: WeatherRootComponent;
  let fixture: ComponentFixture<WeatherRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
