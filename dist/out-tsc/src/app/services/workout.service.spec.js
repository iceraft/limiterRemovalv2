import { TestBed } from '@angular/core/testing';
import { WorkoutService } from './workout.service';
describe('WorkoutService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(WorkoutService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=workout.service.spec.js.map