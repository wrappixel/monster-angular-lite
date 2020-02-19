import { debounceTime } from 'rxjs/operators';
import { Input, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ngbd-alert',
  templateUrl: 'alert.component.html',
  styles: [`
    :host >>> .alert-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
    }
  `]
})
export class NgbdAlertBasicComponent implements OnInit {
  // this is for the Closeable Alert
  @Input() public alerts: Array<IAlert> = [];

  private backup: Array<IAlert>;
  constructor() {
    this.alerts.push(
      {
        id: 1,
        type: 'success',
        message: 'This is an success alert'
      },
      {
        id: 2,
        type: 'info',
        message: 'This is an info alert'
      },
      {
        id: 3,
        type: 'warning',
        message: 'This is a warning alert'
      },
      {
        id: 4,
        type: 'danger',
        message: 'This is a danger alert'
      }
    );
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  // End the Closeable Alert
  // This is for the self closing alert
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public reset() {
    this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
  }

  ngOnInit(): void {
    setTimeout(() => (this.staticAlertClosed = true), 20000);

    this._success.subscribe(message => (this.successMessage = message));
    this._success.pipe(debounceTime(5000)).subscribe(() => (this.successMessage = null));
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
