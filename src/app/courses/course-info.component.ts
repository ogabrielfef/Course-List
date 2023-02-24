import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {

  course!: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }
  // activateRoute serve para conseguirmaos pegar o parametro da rota 
  ngOnInit(): void {
    this.course =  this.courseService.retriveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }

  save(): void {
    this.courseService.save(this.course);
  }

}