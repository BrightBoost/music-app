import { Component } from '@angular/core';
import { PlayService } from '../providers/play.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent {
  name: string = "";
  artist: string = "";
  src: string = "";

  constructor(private playService: PlayService) {}

  onAddSong() {
    let song = {
      name: this.name,
      artist: this.artist,
      src: this.src
    }
    console.dir(song);
    this.playService.addSongs(song);
  }
}
