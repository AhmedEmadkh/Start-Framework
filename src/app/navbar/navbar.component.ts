import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    this.navAnimation();
  }
  navAnimation(){
    $(()=>{
      $(window).on('scroll',function(){
        if($(window).scrollTop()){
          $(".navbar").removeClass('py-4')
          $(".navbar").addClass('py-2')
        }else{
          $(".navbar").removeClass('py-2')
          $(".navbar").addClass('py-4')
        }
      })
    })
  }
}
