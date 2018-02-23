import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthenticationService } from './_services/authentication.service';
import { UsaBannerComponent } from './usa-banner/usa-banner.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilService } from './_services/util.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Routes } from '@angular/router';

export class MockAuthenticationService {
  user = { email: 'test@test.com', role: 'admin' };
  getAuthenticatedUser(): Observable<{}> {
    return Observable.of({ email: 'test@test.com', role: 'admin' });
  }
}

const testRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AppComponent
      },
      {
        path: '#tree',
        component: AppComponent
      }
    ]
  }
];

describe('AppComponent', () => {
  describe('init', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [RouterTestingModule.withRoutes(testRoutes), HttpClientTestingModule],
          declarations: [AppComponent, UsaBannerComponent],
          providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }, UtilService],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
      })
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it(
      'should create the app',
      async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      })
    );
    it('should show the status alert if present', () => {
      expect(localStorage.getItem('status')).toBe(null);
    });
    it('should set logged in message', () => {
      component.setLoggedInMessage();
      expect(component.status).toEqual({
        heading: '',
        message: 'You have successfully logged in using eAuthentication as test@test.com.'
      });
    });
  });

  describe('status alert', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(
      async(() => {
        TestBed.configureTestingModule({
          imports: [RouterTestingModule, HttpClientTestingModule],
          declarations: [AppComponent, UsaBannerComponent],
          providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }, UtilService],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
      })
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      localStorage.setItem('status', JSON.stringify({ message: 'test', heading: 'test' }));
      fixture.detectChanges();
    });
  });
});
