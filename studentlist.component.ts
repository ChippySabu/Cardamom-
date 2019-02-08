import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
public studentdetails:any=[{rollno:"rollno 1",name:"anu",batch:"bca",dept:"comp"},
{rollno:"rollno 2",name:"anju",batch:"mca",dept:"comp"},
{rollno:"rollno 3",name:"manu",batch:"mtech",dept:"engg"}]

selstudent:any;
addstudent(data:any){
 this.selstudent=data;
}

  constructor() { }

  ngOnInit() {
  }

}
