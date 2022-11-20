import { Component, Input } from '@angular/core';
import { RoomList } from '../rooms/rooms';
@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {


@Input() rooms : RoomList[] = []


}
