import { Component, OnInit, Input, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input() rollno:number;
@Input() name:string;
@Input() batch:string;
@Input() dept:string;
@Output() sendstudent:EventEmitter<any>=new EventEmitter();
selectstudent(){
  let selectedstudent:any={srollno:this.rollno,
  sname:this.name,
  sbatch:this.batch,
  sdept:this.dept};
  this.sendstudent.emit(selectedstudent);
}

  constructor() { }

  ngOnInit() {
  }

}
