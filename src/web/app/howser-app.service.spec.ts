import { TestBed, inject } from '@angular/core/testing';

import { HowserAppService } from './howser-app.service';

describe('HowserAppService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [HowserAppService]
        });
    });

    it('should be created', inject([HowserAppService], (service: HowserAppService) => {
        expect(service).toBeTruthy();
    }));
});
