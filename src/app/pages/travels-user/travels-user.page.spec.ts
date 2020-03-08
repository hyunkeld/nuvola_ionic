import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelsUserPage } from './travels-user.page';

describe('TravelsUserPage', () => {
  let component: TravelsUserPage;
  let fixture: ComponentFixture<TravelsUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelsUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelsUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
