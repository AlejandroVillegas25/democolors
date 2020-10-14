import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-administration',
  templateUrl: './forms-administration.component.html',
  styleUrls: ['./forms-administration.component.css']
})
export class FormsAdministrationComponent implements OnInit {

  color = 'pink';  
  size = 16;
  displayText = 'show-class';
  visible = true;
  public estilo="div1";
  public font= "italic";
  public color2 = "rgb(180, 16, 145)";
  public titleStyles={
    color: "rgb(182, 74, 35);" ,
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
