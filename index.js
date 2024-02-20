#!/usr/bin/env node
const note = process.argv[2];
const newNote = {
  note: note,
  id: Date.now(),
};

console.log(newNote);
