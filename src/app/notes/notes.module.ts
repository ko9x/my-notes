import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GitNotesComponent } from './git-notes/git-notes.component';
import { GitNoteEditComponent } from './git-notes/git-note-edit/git-note-edit.component';
import { GitNoteAddComponent } from './git-notes/git-note-add/git-note-add.component';
import { NoteService } from './service/note.service';
import { notesRouting } from './notes.routing';
import { GitNoteItemComponent } from './git-notes/git-note-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    notesRouting
  ],
  declarations: [GitNotesComponent, GitNoteEditComponent, GitNoteAddComponent, GitNoteItemComponent],
  providers: [NoteService]
})
export class NotesModule { }
