import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelname = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms=false;

  rooms: Room ={
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  /*roomList: RoomList[] = [
    {
      roomNumber:1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.pexels.com/photos/14239995/pexels-photo-14239995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
      ,rating:5
    },
    {
      roomNumber:2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://images.pexels.com/photos/7034723/pexels-photo-7034723.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
      ,rating: 4.5932
    },
    {
      roomNumber:3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://images.pexels.com/photos/12192456/pexels-photo-12192456.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021')
      ,rating: 21.44
    }
  ];*/

  roomList: RoomList[] =[];

  constructor(){}

  ngOnInit(): void{
    this.roomList = [
      {
        roomNumber:1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://images.pexels.com/photos/14239995/pexels-photo-14239995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021')
        ,rating:5
      },
      {
        roomNumber:2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://images.pexels.com/photos/7034723/pexels-photo-7034723.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021')
        ,rating: 4.5932
      },
      {
        roomNumber:3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos: 'https://images.pexels.com/photos/12192456/pexels-photo-12192456.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021')
        ,rating: 21.44
      }
    ]
  }


  toggle(){
    this.hideRooms = !this.hideRooms;
  }
}
