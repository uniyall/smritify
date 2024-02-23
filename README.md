![smritify-logo](./sm.png)
# Smritify - Note Taking CLI

Smritify is a command-line interface (CLI) tool designed for taking and managing notes efficiently. It provides a simple yet effective way to create, view, search, and delete notes right from your terminal.

## Installation

To use Smritify, you'll need to have Node.js installed on your system. Then, you can install it globally using npm:

```bash
npm install -g smritify
```

## Usage

### Creating a New Note

```bash
smritify new <note> [--tags <tags>]
```

Create a new note with the specified content. You can optionally add tags to categorize your note.

### Viewing All Notes

```bash
smritify all
```

View all notes currently stored in the database.

### Finding Notes

```bash
smritify find <filter>
```

Find notes that match the specified filter term.

### Removing a Note

```bash
smritify remove <id>
```

Remove a note by its ID.

### Cleaning Up

```bash
smritify clean
```

Remove all notes from the database.

## Example

```bash
smritify new "Remember to buy groceries" --tags "shopping, errands"
smritify find "groceries"
smritify remove all
```

