import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuSocialmediaComponent } from './nav-menu-socialmedia.component';

describe('NavMenuSocialmediaComponent', () => {
  let component: NavMenuSocialmediaComponent;
  let fixture: ComponentFixture<NavMenuSocialmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMenuSocialmediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuSocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
