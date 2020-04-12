const uuid = require('uuid');
const Column = require('./column.model');

class Board {
  constructor({ id = uuid(), title = '', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(column => new Column(column));
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    // const responseColumns = columns.map(Column.toResponse);
    return {
      id,
      title,
      columns
    };
  }
}

module.exports = Board;
