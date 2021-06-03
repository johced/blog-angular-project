import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // *** All other components, need something more than this.
  // *** I got an error with @NgModule Annotation etc.
  // *** Tried a lot of different Imports, providers etc below declarations.
  // *** This task was not focused on tests, but I needed a few. Here they are ;-)

  it('should present angulars website', () => {
    let aTag: HTMLHeadingElement = fixture.nativeElement.querySelector('a');

    expect(aTag.innerText).toBe('Angular website');
  });

  it('should toggle correctly', () => {
    expect(component.isShowing).toBeFalse();
    component.toggle();
    expect(component.isShowing).toBeTrue();
  });

  it('should toggle back correctly', () => {
    expect(component.isShowing).toBeFalse();
    component.toggle();
    component.toggle();
    expect(component.isShowing).toBeFalse();
  });
});
