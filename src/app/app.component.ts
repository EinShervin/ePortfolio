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
                message: 'Bei der ersten Bildänderung möchte ich den Methodenaufruf «toString», der sich links von meinem Cursor in der Mitte des Bildes befindet, in der gleichen grünen Farbe wie die anderen Methodenaufrufe einfärben.',
                src: '/assets/images/erstes-final.png',
                isVideo: false,
                active: true
            },
            {
                title: Constants.Sites.CURVE,
                message: 'Ich möchte die Farben etwas kräftiger machen und den Kontrast erhöhen, aber nicht so extrem, dass das Bild bearbeitet aussieht, eher dezent.',
                src: '/assets/images/zweites-final.jpg',
                isVideo: false,
                active: false
            },
            {
                title: Constants.Sites.PIXEL,
                message: 'Wir Informatiker arbeiten mit Programmcode, der sehr sensibel sein kann. Deshalb möchte ich auf dem folgenden Bild meinen Bildschirm verpixeln, damit man den Programmcode nicht mehr lesen kann.',
                src: '/assets/images/dritte-final.png',
                isVideo: false,
                active: false
            },
            {
                title: Constants.Sites.VIDEO,
                message: 'In diesem Video zeige ich, wie man sich den Alltag eines Informatikers vorstellt und wie er sein sollte. Frühstücken, trainieren und dann programmieren.',
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
