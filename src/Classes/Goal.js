export class Goal {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }
}

export class Task extends Goal {
  constructor(title, description, priority, date, difficulty,category) {
    super(title, description);
    this.priority = priority;
    this.date = date;
    this.difficulty = difficulty;
    this.progress = 0; // Default progress is set to 0
    this.completed = false; // Default completion status is set to false
    this.category=category;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getDate() {
    return this.date;
  }

  setDate(date) {
    this.date = date;
  }

  getDifficulty() {
    return this.difficulty;
  }

  setDifficulty(difficulty) {
    this.difficulty = difficulty;
  }

  getProgress() {
    return this.progress;
  }

  setProgress(progress) {
    this.progress = progress;
  }

  isCompleted() {
    return this.completed;
  }

  setCompleted(completed) {
    this.completed = completed;
  }

  setCategory(category){
    this.category=category;
  }
  getCategory(){
    return this.category;
  }
}

// Example usage:
export default Goal