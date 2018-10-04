import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  let fixture, compiled, app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
      app = fixture.debugElement.componentInstance;

    });
  }));

  it(`should have as title 'my-dream-app'`, async(() => {
    expect(app.title).toEqual('');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(compiled.querySelector('h1').textContent).toContain('I have a dream!');
  }));

  it('should update title when new dream is entered', async(() => {
    const dreamInput = compiled.querySelector('input[id="dream-input"]');
    dreamInput.value = 'new dream';
    dreamInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(compiled.querySelector('h1').textContent).toContain('I have a dream! new dream');
  }));

  it('should render title in a h2 tag', async(() => {
    expect(compiled.querySelector('h2').textContent).toContain('I want to achieve my dream by ');
  }));

  it('should update how i achieve my dream when entered', async(() => {
    const dreamInput = compiled.querySelector('input[id="achieve-dream-input"]');
    dreamInput.value = 'setting up goals.';
    dreamInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(compiled.querySelector('h2').textContent).toContain('I want to achieve my dream by setting up goals.');
  }));

  it('should render title in a h3 tag', async(() => {
    expect(compiled.querySelector('h3').textContent).toContain('Achieve Dream Checkbox false');
  }));

  it('should update dream checkbox', async(() => {
    const dreamCheckbox = compiled.querySelector('input[id="achieve-check-dream-input"]');
    dreamCheckbox.click();
    expect(dreamCheckbox.checked).toBeTruthy();
  }));
});
