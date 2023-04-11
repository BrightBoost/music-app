import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayService } from '../providers/play.service';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css'],
})
export class PlayerlistComponent implements OnInit {
  songs: any;

  constructor(private router: Router, private playService: PlayService) {}

  ngOnInit() {
    this.songs = this.playService.getSongs();
  }
  playSong(id: string) {
    this.router.navigate(['/song'], {
      queryParams: {
        id: id,
      },
    });
  }

}
