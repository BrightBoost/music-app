import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PlayService } from '../providers/play.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  song!: any;
  url!: SafeResourceUrl;
  songs: Array<any> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private playService: PlayService
  ) {}

  ngOnInit() {
    this.songs = this.playService.getSongs();
    console.dir(this.songs);
    this.activatedRoute.queryParams.subscribe((params) => {
      let id = params['id'];
      this.song = this.getSong(id);
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.song.src);
    });
  }

  getSong(id: number) {
    return this.songs.find((song) => song.id == id);
  }
}
