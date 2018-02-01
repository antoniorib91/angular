import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() texto:   string;
  @Input() estilo:  string;
  @Input() tipo:    string = "button";
  @Input() classe:  string = "btn btn-default";

  constructor() { }

  ngOnInit() {
  }

}
 