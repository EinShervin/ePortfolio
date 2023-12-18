import {Component} from '@angular/core';
import {Content} from "../helper/classes/Content";
import {last} from "rxjs";

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
                title: 'Shervin',
                message: '',
                src: '',
                isVideo: false,
                active: true
            },
            {
                title: 'Alisha',
                message: '',
                src: '',
                isVideo: false,
                active: false
            },
            {
                title: 'Anja',
                message: '',
                src: '',
                isVideo: false,
                active: false
            },
            {
                title: 'ANDRE',
                message: '',
                src: '',
                isVideo: false,
                active: false
            },
            {
                title: 'Rasco',
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

    getActive(): Content {
        return this.contentList.find((content: Content) => content.active)!;
    }

    nextSelection(): void {
        const lastActive: Content | undefined = this.contentList.find((content: Content) => content.active);
        if (!lastActive) {
            return;
        }
        lastActive.active = false;
        const index: number = this.contentList.indexOf(lastActive);
        if (index === -1) {
            return;
        }
        if (index + 1 >= this.contentList.length) {
            this.contentList.at(0)!.active = true;
            return;
        }
        this.contentList.at(index + 1)!.active = true;
    }
}
