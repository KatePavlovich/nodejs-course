const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'task test title',
    order = 1,
    description = 'task description',
    userId = null,
    boardId = null,
    columnId = 1
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId } = task;
    return { id, title, order, description, userId };
  }
}

module.exports = Task;
