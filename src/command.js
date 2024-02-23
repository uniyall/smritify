import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  newNote,
  getAllNotes,
  findNotes,
  removeAllNotes,
  removeNote,
} from "./note.js";

yargs(hideBin(process.argv))
  .option("tags", {
    alias: "t",
    type: "string",
    description: "tags to add to the note",
  })
  .command(
    "new <note>",
    "create a new note",
    (yargs) => {
      return yargs.positional("note", {
        describe: "The content of the note you want to create",
        type: "string",
      });
    },
    async (argv) => {
      const tags = argv.tags ? argv.tags.split(",") : [];
      await newNote(argv.note, tags);
      console.log("Note Added!");
    }
  )
  .command(
    "all",
    "get all notes",
    () => {},
    async (argv) => {
      console.log(await getAllNotes());
    }
  )
  .command(
    "find <filter>",
    "get matching notes",
    (yargs) => {
      return yargs.positional("filter", {
        describe:
          "The search term to filter notes by, will be applied to note.content",
        type: "string",
      });
    },
    async (argv) => {
      console.log(await findNotes(argv.filter));
    }
  )
  .command(
    "remove <id>",
    "remove a note by id",
    (yargs) => {
      return yargs.positional("id", {
        type: "number",
        description: "The id of the note you want to remove",
      });
    },
    async (argv) => {
      const res = await removeNote(argv.id);
      if (res) {
        console.log(`Deleted note with the id ${argv.id}`);
      } else {
        console.log(`Unable to find note with the id ${argv.id}`);
      }
    }
  )
  .command(
    "web [port]",
    "launch website to see notes",
    (yargs) => {
      return yargs.positional("port", {
        describe: "port to bind on",
        default: 5000,
        type: "number",
      });
    },
    async (argv) => {}
  )
  .command(
    "clean",
    "remove all notes",
    () => {},
    async (argv) => {
      await removeAllNotes();
      console.log(`Removed all Notes from the db`);
    }
  )
  .demandCommand(1)
  .parse();
