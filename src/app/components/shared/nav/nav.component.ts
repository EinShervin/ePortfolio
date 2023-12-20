import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Constants} from "../../../../helper/classes/Constants";
import {Content} from "../../../../helper/classes/Content";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    @Input() contents!: Content[];
    @Input() active!: Content;
    @Output() change: EventEmitter<Content> = new EventEmitter<Content>();
    public elements: string[] = Constants.Sites.SITES;
    public isBurgerActive: boolean = false;
    private mode: 'light' | 'dark' = 'dark';

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

    public toggleBurger(): void {
        this.isBurgerActive = !this.isBurgerActive;
    }
}
