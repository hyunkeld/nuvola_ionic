import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelsNewPage } from './travels-new.page';

describe('TravelsNewPage', () => {
  let component: TravelsNewPage;
  let fixture: ComponentFixture<TravelsNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelsNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelsNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
