import {Component, Input} from '@angular/core';
import {Content} from "../../../helper/classes/Content";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() active!: Content;
}
