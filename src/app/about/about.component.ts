import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info={
    nom:"zied",
    email:"zied@gmail.com",
    tel:"26509253"
  };
comments=[{date:new Date(),message:"A"},
{date:new Date(), message:"B"},
{date:new Date(), message:"C"}
];
  constructor() { }

  ngOnInit(): void {
  }

}
