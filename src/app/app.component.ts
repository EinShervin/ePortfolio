import {Component} from '@angular/core';
import {Content} from "../helper/classes/Content";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'ePortfolio';
    contentList: Content[] = this.getContentList();

    getContentList(): Content[] {
        return [
            {
                title: '',
                message: '',
                src: '',
                isVideo: false,
                active: true
            },
            {
                title: '',
                message: '',
                src: '',
                isVideo: false,
                active: false
            },
            {
                title: '',
                message: '',
                src: '',
                isVideo: false,
                active: false
            },
            {
                title: '',
                message: '',
                src: '',
                isVideo: false,
                active: false
            },
            {
                title: '',
                message: '',
                src: '',
                isVideo: false,
                active: false
            }
        ];
    }

    changeSelection(content: Content): void {
        this.contentList.forEach((content: Content) => content.active = false);
        content.active = true;
    }
}
