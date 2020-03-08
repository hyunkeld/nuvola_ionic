import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientNewPage } from './client-new.page';

describe('ClientNewPage', () => {
  let component: ClientNewPage;
  let fixture: ComponentFixture<ClientNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
