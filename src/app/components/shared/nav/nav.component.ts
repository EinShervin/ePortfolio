import {Component} from '@angular/core';
import {Constants} from "../../../../helper/classes/Constants";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    public elements: string[] = Constants.Sites.SITES;
    private mode: 'light' | 'dark' = 'dark';
    public activeElement: string = Constants.Sites.HOME;

    public getCurrentModeSrc(): string {
        const base: string = 'assets/icons/mode/'
        if (this.mode === 'dark') {
            return base + 'moon.svg';
        }
        return base + 'brightness.svg';
    }

    public getCurrentMode(): string {
        if (this.mode === 'light') {
            return 'Lightmode';
        }
        return "Darkmode";
    }

    public switchMode(): void {
        this.mode = this.mode === 'light' ? 'dark' : 'light';
    }
}
