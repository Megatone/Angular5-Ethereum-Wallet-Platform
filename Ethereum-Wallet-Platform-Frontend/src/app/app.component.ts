import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
import { UserService } from './services/user/user.service';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { User } from './models/user.model';
import { NodeInformation } from './models/nodeInformation.model';
import { NodeService } from './services/node/node.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserService,
    NodeService
  ]
})

export class AppComponent implements OnInit, DoCheck, OnDestroy {

  public identity: User;
  public menuVisible: Boolean;
  public nodeInformation: NodeInformation;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _nodeService: NodeService
  ) {
    this.nodeInformation = new NodeInformation();
    this.nodeInformation.initSocket(this._nodeService);
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setVisibilityMenu();
        this._route.params.subscribe(params => {
          if (!params.target && this._route.children['0'].component.name !== 'HomeComponent') {
            document.getElementsByTagName('body')[0].scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      }
    });
  }

  ngOnInit(): void {
    this.identity = new User().loadLocal();
  }

  ngDoCheck(): void {
    this.identity = new User().loadLocal();
  }

  ngOnDestroy(): void {
    this._nodeService.socket.disconnect();
  }

  logout() {
    this.identity = this.identity.removeLocal();
    this._router.navigate(['/']);
  }

  toogleMenu() {
    const x = document.getElementById('myTopnav');
    if (x.className.indexOf('visible') === -1) {
      x.className = 'navbar navbar-dark topnav responsive visible';
      this.menuVisible = true;
    } else {
      x.className = 'navbar navbar-dark topnav responsive';
      this.menuVisible = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setVisibilityMenu();
  }

  setVisibilityMenu(): void {
    const x = document.getElementById('myTopnav');
    if (window.innerWidth > 767) {
      x.className = 'navbar navbar-dark topnav responsive visible';
      this.menuVisible = true;
    } else {
      x.className = 'navbar navbar-dark topnav responsive';
      this.menuVisible = false;
    }
  }
}
