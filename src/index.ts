// Todo App for Git Rebase Demo

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
}

class TodoApp {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTodo(title: string): Todo {
    const todo: Todo = {
      id: this.nextId++,
      title,
      completed: false,
      createdAt: new Date()
    };
    this.todos.push(todo);
    return todo;
  }

  listTodos(): Todo[] {
    return this.todos;
  }

  toggleTodo(id: number): boolean {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      return true;
    }
    return false;
  }

  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  getTodoCount(): number {
    return this.todos.length;
  }
}

// Demo usage
const app = new TodoApp();

console.log('=== Todo App Demo ===');
app.addTodo('Learn TypeScript');
app.addTodo('Practice Git Rebase');
app.addTodo('Resolve Merge Conflicts');

console.log('\nAll Todos:');
app.listTodos().forEach(todo => {
  console.log(`${todo.id}. [${todo.completed ? 'x' : ' '}] ${todo.title}`);
});

console.log(`\nTotal todos: ${app.getTodoCount()}`);

// Toggle first todo
app.toggleTodo(1);
console.log('\nAfter completing first todo:');
app.listTodos().forEach(todo => {
  console.log(`${todo.id}. [${todo.completed ? 'x' : ' '}] ${todo.title}`);
});

export { TodoApp, Todo };