import { getDB, saveDB, insert } from "./db.js";

export const newNote = async (note, tag) => {
  const data = {
    content: note,
    tags: tag,
    id: Date.now(),
  };

  await insert(data);
  return data;
};

export const getAllNotes = async () => {
  const db = await getDB();
  return db.note;
};

export const findNotes = async (filter) => {
  const allNotes = await getAllNotes();
  return allNotes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  );
};

export const removeNote = async (id) => {
  const allNotes = await getAllNotes();
  const match = allNotes.filter((note) => note.id === id);

  if (match.length !== 0) {
    const newNote = allNotes.filter((note) => note.id !== id);
    await saveDB({ note: newNote });
    return id;
  }
};

export const removeAllNotes = async () => {
  await saveDB({ note: [] });
};
