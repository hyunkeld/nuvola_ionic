import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientShowPage } from './client-show.page';

describe('ClientShowPage', () => {
  let component: ClientShowPage;
  let fixture: ComponentFixture<ClientShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
