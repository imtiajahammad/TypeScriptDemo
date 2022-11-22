import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { OutputFileType } from 'typescript';
import { RoomList } from '../rooms/rooms';
@Component({
  selector: 'hinv-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
  ,changeDetection: ChangeDetectionStrategy.OnPush/* we are not running the change detection for this component until and unless needed. your component should not change data internally and assigning/passing some data it should come from parent component or the property should be immutable */
})
export class RoomListComponent implements OnChanges{


ngOnChanges(changes: SimpleChanges): void 
{
 console.log(changes);
 if(changes['title']){
  this.title = changes['title'].currentValue.toUpperCase();
 }
}


@Input() rooms : RoomList[] = [];

@Input() title: string ='';




@Output() selectedRoom = new EventEmitter<RoomList>();


selectRoom(room: RoomList){
  this.selectedRoom.emit(room);
}

}
