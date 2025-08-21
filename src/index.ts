// Todo App for Git Rebase Demo

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  category: string;
  priority: "low" | "medium" | "high";
  createdAt: Date;
}

class TodoApp {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTodo(
    title: string,
    category: string = "general",
    priority: "low" | "medium" | "high" = "medium"
  ): Todo {
    const todo: Todo = {
      id: this.nextId++,
      title,
      completed: false,
      category,
      priority,
      createdAt: new Date(),
    };
    this.todos.push(todo);
    return todo;
  }

  listTodos(): Todo[] {
    return this.todos;
  }

  toggleTodo(id: number): boolean {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      return true;
    }
    return false;
  }

  deleteTodo(id: number): boolean {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  getTodosByCategory(category: string): Todo[] {
    return this.todos.filter((todo) => todo.category === category);
  }

  getTodoCount(): number {
    return this.todos.length;
  }

  getCategoryCount(): number {
    const categories = new Set(this.todos.map((todo) => todo.category));
    return categories.size;
  }
}

// Demo usage
const app = new TodoApp();

console.log("=== Todo App Demo ===");
app.addTodo("Learn TypeScript", "learning", "high");
app.addTodo("Practice Git Rebase", "development", "medium");
app.addTodo("Resolve Merge Conflicts", "development", "high");
app.addTodo("Write Tests", "testing");

console.log("\nAll Todos:");
app.listTodos().forEach((todo) => {
  console.log(
    `${todo.id}. [${todo.completed ? "x" : " "}] ${todo.title} [${
      todo.category
    }] (${todo.priority})`
  );
});

console.log(`\nTotal todos: ${app.getTodoCount()}`);

// Toggle first todo
app.toggleTodo(1);
console.log("\nAfter completing first todo:");
app.listTodos().forEach((todo) => {
  console.log(
    `${todo.id}. [${todo.completed ? "x" : " "}] ${todo.title} [${
      todo.category
    }] (${todo.priority})`
  );
});

export { TodoApp, Todo };
