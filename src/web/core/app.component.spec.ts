import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { NgSeedRouteMock } from '../app/routes.mock';
import { NavigationService, HowserCoreModule } from '@howser/core';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './routes';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                HowserCoreModule.forRoot(),
                RouterTestingModule.withRoutes(routes)
            ],
            declarations: [AppComponent],
            providers: [
                { provide: ActivatedRoute, useClass: NgSeedRouteMock },
                NavigationService
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
