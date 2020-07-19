import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddnewPage } from './addnew.page';

describe('AddnewPage', () => {
  let component: AddnewPage;
  let fixture: ComponentFixture<AddnewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
