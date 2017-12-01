import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoCheck, OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NodeService } from '../../services/node/node.service';
import { NodeInformation } from '../../models/nodeInformation.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NodeService]
})
export class HomeComponent implements DoCheck, OnInit {


  public target: string;
  public syncPercent = 100;
  public pendingBlocks = 0;
  public users = 0;
  public transactions = 0;
  public wallets = 0;
  public nodeInformation: NodeInformation;
  public chart = {
    legend: false,
    type: 'line',
    options: {
      responsive: false,
      scales: {
        yAxes: [{ display: false }],
        xAxes: [{ display: false }]
      }
    },
    labels: [],
    data: [
      {
        data: [],
        pointRadius: 5,
        pointHoverRadius: 5,
        pointHitRadius: 10,
        pointBorderWidth: 1,
        pointHoverBorderWidth: 2
      }
    ],
    colors: [
      {
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderColor: 'white',
        pointBackgroundColor: 'white',
        pointHoverBackgroundColor: '#fff',
        pointBorderColor: '#17203e',
        pointHoverBorderColor: '#17203e'
      }
    ],
    timeLabels: [
      { days: 30, label: 'MONTH' },
      { days: 365, label: 'YEAR' },
      { days: 1, label: 'DAY' }
    ],
    indexTimeLabel: 0
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _nodeService: NodeService
  ) {
    this.nodeInformation = new NodeInformation().loadLocal();
    this._route.params.subscribe(params => {
      this.target = params.target;
      if (!this.target) {
        this.scroll(document.getElementsByTagName('body')[0]);
      }
    });
    this.getPriceHistory();
  }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', null);
    this.nodeInformation.suscribeChanges();
  }

  ngDoCheck(): void {
    if (this.target && this.target !== 'blank') {
      this.scroll(document.getElementById(this.target));
      this._router.navigate(['/home', 'blank']);
    } else if (this.target !== 'blank') {
      document.getElementsByTagName('body')[0].scrollIntoView({
        block: 'start'
      });
    }
  }

  scroll(el) {
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      this.target = 'blank';
    }
  }

  getPriceHistory(): void {
    const days = this.chart.timeLabels[this.chart.indexTimeLabel].days;
    this._nodeService.getPriceHistory(days).subscribe(
      response => {
        for (let i = 0; i <= response.data.length - 1; i++) {
          const d = new Date(response.data[i].time * 1000);
          const yyyy = d.getFullYear().toString();
          const MM = (d.getMonth() + 101).toString().slice(-2);
          const dd = (d.getDate() + 100).toString().slice(-2);
          const hh = (d.getHours()).toString().slice(-2);

          this.chart.labels.push((days === 1) ? dd + '-' + MM + '-' + yyyy + ' ' + hh + ':00' : dd + '-' + MM + '-' + yyyy);
          this.chart.data[0].data.push(response.data[i].close);
        }
      }, error => {
      }
    );
  }
}
