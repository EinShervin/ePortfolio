import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Content} from "../../../helper/classes/Content";

@Component({
    selector: 'app-content-slider',
    templateUrl: './content-slider.component.html',
    styleUrls: ['./content-slider.component.scss']
})
export class ContentSliderComponent {
    @Input() contentList!: Content[];
    @Output() selectionChange: EventEmitter<Content> = new EventEmitter<Content>();

    changeSelection(content: Content): void {
        this.selectionChange.emit(content);
    }
}
