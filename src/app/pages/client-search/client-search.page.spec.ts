import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientSearchPage } from './client-search.page';

describe('ClientSearchPage', () => {
  let component: ClientSearchPage;
  let fixture: ComponentFixture<ClientSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
