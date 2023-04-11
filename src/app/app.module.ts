import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { PlayerComponent } from './player/player.component';
import { PlayService } from './providers/play.service';
import { AddSongComponent } from './add-song/add-song.component';

const appRoutes: Routes = [
  { path: 'song', component: PlayerComponent },
  { path: 'list', component: PlayerlistComponent },
  { path: 'add', component: AddSongComponent }
];
@NgModule({
  declarations: [AppComponent, PlayerlistComponent, PlayerComponent, AddSongComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [PlayService],
  bootstrap: [AppComponent],
})
export class AppModule {}
