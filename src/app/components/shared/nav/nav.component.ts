import { Component } from '@angular/core';
import {Constants} from "../../../../helper/classes/Constants";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public elements: string[] = Constants.Sites.SITES;
  private mode: 'light' | 'dark' = 'dark';

  public getCurrentModeSrc(): string {
    const base: string = 'assets/icons/mode/'
    if (this.mode === 'dark') {
      return base + 'moon.svg';
    }
    return base + 'brightness.svg';
  }
}
