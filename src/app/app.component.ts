import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private nb = $('.navbtn');
  private n = $('.mainnav');
  constructor() {}
  public openMenuMobile(e) {
    e.preventDefault();
    $('.mainnav').slideToggle(350);
  }

  public openSubMenuMobile(e) {
    e.preventDefault();
    if ($(window).width() < 570) {
      $('li.dropdown ul').slideToggle(350);
      // if (!($('li.dropdown ul').hasClass('sub-menu-mobile'))) {
      //   $('li.dropdown ul').css('display', 'block');
      //   $('li.dropdown ul').addClass('sub-menu-mobile');
      // } else {
      //   $('li.dropdown ul').css('display', 'none');
      //   $('li.dropdown ul').removeAttr('class');
      // }
    }
    // if ($(window).width() < 570 && !this.isSubMenuMobileOpen) {
    //     this.isSubMenuMobileOpen = false;
    //     $('li.dropdown ul').removeAttr('style');
    //     $('li.dropdown ul').css('display', 'block');
    // }
    // if ($(window).width() < 570 && this.isSubMenuMobileOpen) {
    //   this.isSubMenuMobileOpen = true;
    //   $('li.dropdown ul').removeAttr('style');
    //   $('li.dropdown ul').css('display', 'none');
    // }
  }

  @HostListener('window:resize', ['$event'])
    onResize($event) {
      if ($(window).width() < 570) {
        $('.mainnav').hide().removeAttr('style');
      }
      // if ($(window).width() > 569) {
      //   $('li.dropdown ul').css('display', 'none');
      // }
    // if ($(window).width() < 570) {
    //   // if the nav menu and nav button are both visible,
    //   // then the responsive nav transitioned from open to non-responsive, then back again.
    //   // re-hide the nav menu and remove the hidden class
    //   $('.mainnav').hide().removeAttr('class');
    // }
    // if ($(window).width() > 569) {
    //   // if the navigation menu and nav button are both hidden,
    //   // then the responsive nav is closed and the window resized larger than 560px.
    //   // just display the nav menu which will auto-hide at <560px width.
    //   $('.mainnav').show().addClass('keep-nav-closed');
    // }
  }

  // @HostListener('.dropdown a:click', ['$event'])
  //   dropDownAClick($event) {
  //     $event.preventDefault();
  //     $(this).siblings().slideToggle(350);
  // }
}
