import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Content} from "../../../../../helper/classes/Content";

@Component({
    selector: 'app-open-nav',
    templateUrl: './open-nav.component.html',
    styleUrls: ['./open-nav.component.scss']
})
export class OpenNavComponent {
    @Input() set activeNav(activeNav: boolean) {
        this.isNavActive = activeNav;
        this.handleScrolling();
    }

    @Input() contents!: Content[];
    @Input() active!: Content;
    @Output() change: EventEmitter<Content> = new EventEmitter<Content>();
    isNavActive: boolean = false;

    public goTo(element: Content): void {
        this.enableScrolling();
        this.change.emit(element);
    }

    private handleScrolling(): void {
        if (this.isNavActive) {
            this.disableScrolling();
            return;
        }
        this.enableScrolling();
    }

    private preventScroll(event: Event): void {
        event.preventDefault();
    }

    private disableScrolling(): void {
        document.addEventListener('wheel', this.preventScroll, {passive: false});
        document.addEventListener('touchmove', this.preventScroll, {passive: false});
    }

    private enableScrolling(): void {
        document.removeEventListener('wheel', this.preventScroll);
        document.removeEventListener('touchmove', this.preventScroll);
    }
}
