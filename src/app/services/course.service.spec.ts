import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import {CourseService} from "./course.service";

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});