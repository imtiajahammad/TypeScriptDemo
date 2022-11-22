import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { OutputFileType } from 'typescript';
import { RoomList } from '../rooms/rooms';
@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
  ,changeDetection: ChangeDetectionStrategy.OnPush/* we are not running the change detection for this component until and unless needed. your component should not change data internally and assigning/passing some data it should come from parent component or the property should be immutable */
})
export class RoomListComponent {


@Input() rooms : RoomList[] = [];


@Output() selectedRoom = new EventEmitter<RoomList>();


selectRoom(room: RoomList){
  this.selectedRoom.emit(room);
}

}
