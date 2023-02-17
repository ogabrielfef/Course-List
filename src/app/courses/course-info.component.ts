import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {

  courseId!: number;

  constructor(private activatedRoute: ActivatedRoute) { }
  // activateRoute serve para conseguirmaos pegar o parametro da rota 
  ngOnInit(): void {
    this.courseId =  Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}