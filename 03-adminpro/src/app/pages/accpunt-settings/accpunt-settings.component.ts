import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-accpunt-settings',
  templateUrl: './accpunt-settings.component.html',
  styles: [
  ]
})
export class AccpuntSettingsComponent implements OnInit {



  constructor( private settingsService: SettingsService) { }

  ngOnInit(): void {
   
    this.settingsService.chekCurrentTheme ();
  }
  changeTheme( theme: string){
    this.settingsService.changeTheme( theme );
  }

}
