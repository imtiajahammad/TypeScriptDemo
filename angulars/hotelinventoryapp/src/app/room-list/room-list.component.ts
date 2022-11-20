import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutputFileType } from 'typescript';
import { RoomList } from '../rooms/rooms';
@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {


@Input() rooms : RoomList[] = [];


@Output() selectedRoom = new EventEmitter<RoomList>();


selectRoom(room: RoomList){
  this.selectedRoom.emit(room);
}

}
