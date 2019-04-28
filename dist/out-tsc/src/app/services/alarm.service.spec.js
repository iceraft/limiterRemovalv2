import { TestBed } from '@angular/core/testing';
import { AlarmService } from './alarm.service';
describe('AlarmService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AlarmService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=alarm.service.spec.js.map