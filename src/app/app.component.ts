import {Component} from '@angular/core';
import {Content} from "../helper/classes/Content";
import {Constants} from "../helper/classes/Constants";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'ePortfolio';
    contentList: Content[] = this.getContentList();

    private getContentList(): Content[] {
        return [
            {
                title: Constants.Sites.COLOR,
                message: '',
                src: '/assets/images/erstes-final.png',
                isVideo: false,
                active: true
            },
            {
                title: Constants.Sites.CURVE,
                message: '',
                src: '/assets/images/zweites-final.jpg',
                isVideo: false,
                active: false
            },
            {
                title: Constants.Sites.PIXEL,
                message: '',
                src: '/assets/images/dritte-final.png',
                isVideo: false,
                active: false
            },
            {
                title: Constants.Sites.VIDEO,
                message: '',
                src: '',
                isVideo: true,
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
