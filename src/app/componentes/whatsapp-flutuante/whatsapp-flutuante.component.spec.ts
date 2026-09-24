import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappFlutuanteComponent } from './whatsapp-flutuante.component';

describe('WhatsappFlutuanteComponent', () => {
  let component: WhatsappFlutuanteComponent;
  let fixture: ComponentFixture<WhatsappFlutuanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappFlutuanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappFlutuanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
