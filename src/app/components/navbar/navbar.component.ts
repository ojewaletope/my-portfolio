import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navToggle') navToggle: ElementRef | undefined
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(event: any) {
    this.navToggle?.nativeElement.toggle('nav-open')
  }

}
