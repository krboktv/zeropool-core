import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadersCSS } from 'ngx-loaders-css';
import { ElectronService } from "../../core/services";


@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {

  @Input()
  zpEthAmount: number;

  @Output()
  backClick = new EventEmitter<boolean>();

  showSpinner = false;
  bgColor = 'black';
  color = 'rgba(100, 100, 100, 0.5)';
  loader: LoadersCSS = 'pacman';
  private isDone = false;

  constructor(private electronService: ElectronService, private cd: ChangeDetectorRef) {
  }

  onCancelClick() {
    this.backClick.emit(true);
  }

  onWithdrawClick() {
    this.electronService.ipcRenderer.send('withdraw');
    this.showSpinner = true;
    this.cd.detectChanges();

    this.electronService.ipcRenderer.on('withdraw-hash', (event, std_out) => {
      console.log(std_out);
      this.showSpinner = false;
      this.isDone = true;
      this.cd.detectChanges();
    });
  }
}
