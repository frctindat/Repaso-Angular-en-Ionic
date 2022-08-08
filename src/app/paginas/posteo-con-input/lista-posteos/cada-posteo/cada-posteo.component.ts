import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cada-posteo',
  templateUrl: './cada-posteo.component.html',
  styleUrls: ['./cada-posteo.component.css']
})
export class CadaPosteoComponent implements OnInit {

  @Input() UnPost: any;

  constructor() { }

  ngOnInit(): void {
  }

}
