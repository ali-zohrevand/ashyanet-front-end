import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css']
})
export class MenuSectionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.loadScript('../../../../../assets/vendors/jquery/dist/jquery.min.js');
    this.loadScript('../../../../../assets/vendors/bootstrap/dist/js/bootstrap.min.js');
    this.loadScript('../../../../../assets/vendors/iCheck/icheck.min.js');
    this.loadScript('../../../../../assets/vendors/fastclick/lib/fastclick.js');
     this.loadScript('../../../../../assets/vendors/nprogress/nprogress.js');
     this.loadScript('../../../../../assets/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js');
     this.loadScript('../../../../../assets/vendors/iCheck/icheck.min.js');
     this.loadScript('../../../../../assets/vendors/moment/min/moment.min.js');
     this.loadScript('../../../../../assets/vendors/bootstrap-daterangepicker/daterangepicker.js');
     this.loadScript('../../../../../assets/vendors/Chart.js/dist/Chart.min.js');
     this.loadScript('../../../../../assets/vendors/jquery-sparkline/dist/jquery.sparkline.min.js');
     this.loadScript('../../../../../assets/vendors/gauge.js/dist/gauge.min.js');
     this.loadScript('../../../../../assets/vendors/skycons/skycons.js');
     this.loadScript('../../../../../assets/vendors/Flot/jquery.flot.js');
     this.loadScript('../../../../../assets/vendors/Flot/jquery.flot.pie.js');
     this.loadScript('../../../../../assets/vendors/Flot/jquery.flot.time.js');
     this.loadScript('../../../../../assets/vendors/Flot/jquery.flot.stack.js');
     this.loadScript('../../../../../assets/vendors/Flot/jquery.flot.resize.js');
     this.loadScript('../../../../../assets/vendors/flot.orderbars/js/jquery.flot.orderBars.js');
     this.loadScript('../../../../../assets/vendors/flot-spline/js/jquery.flot.spline.min.js');
     this.loadScript('../../../../../assets/vendors/flot.curvedlines/curvedLines.js');
     this.loadScript('../../../../../assets/vendors/DateJS/build/production/date.min.js');
     this.loadScript('../../../../../assets/vendors/jqvmap/dist/jquery.vmap.js');
     this.loadScript('../../../../../assets/vendors/jqvmap/dist/maps/jquery.vmap.world.js');
     this.loadScript('../../../../../assets/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js');
    this.loadScript('../../../../../assets/js/custom.js');

  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
