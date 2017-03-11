import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

import { NoteService } from '../service/note.service';
import { Note } from '../note';

@Component({
  selector: 'app-git-notes',
  templateUrl: './git-notes.component.html',
  styleUrls: ['./git-notes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GitNotesComponent implements OnInit {

  notes: FirebaseListObservable<Note[]>

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit() {
   this.getNotes()
  }

  getNotes() {
    this.notes = this.noteService.getNotes()
  }

  toAdd(sectionName) {
    this.router.navigate(['notes/git-notes/new/' + sectionName])
  }

  onCanEdit(note: Note) {
    note.isEditable = !note.isEditable;
  }

}
