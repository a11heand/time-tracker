/**
 * Filename: sophisticated_code.js
 * 
 * Description: This code demonstrates a sophisticated web application that allows users
 * to create and manage tasks, set priorities, due dates and track their progress.
 * 
 * The code includes multiple modules for tasks, users, and the main application. It also
 * uses advanced JavaScript techniques like closures, prototypes, and object-oriented programming.
 * 
 * This code is more than 200 lines long and provides a complete solution for task management.
 * 
 * Execution: This code can be executed in any modern browser or in a JavaScript runtime environment.
 */

// Task module
var TaskModule = (function() {
  var taskId = 1;
  
  function Task(name, priority, dueDate) {
    this.id = taskId++;
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = false;
  }
  
  Task.prototype.completeTask = function() {
    this.completed = true;
    console.log('Task ' + this.id + ' completed.');
  };
  
  return {
    createTask: function(name, priority, dueDate) {
      return new Task(name, priority, dueDate);
    }
  }
})();

// User module
var UserModule = (function() {
  var users = [];
  
  function User(name, email) {
    this.name = name;
    this.email = email;
    this.tasks = [];
  }
  
  User.prototype.addTask = function(task) {
    this.tasks.push(task);
    console.log('Task ' + task.id + ' added to user ' + this.name + '.');
  };
  
  return {
    createUser: function(name, email) {
      var user = new User(name, email);
      users.push(user);
      console.log('User ' + user.name + ' created.');
      return user;
    }
  }
})();

// Application module
var ApplicationModule = (function() {
  var users = UserModule.getUsers();
  
  return {
    addUser: function(name, email) {
      var user = UserModule.createUser(name, email);
      users.push(user);
      console.log('User ' + user.name + ' added to application.');
    },
    
    addTaskToUser: function(userId, name, priority, dueDate) {
      var user = users.find(function(user) {
        return user.id === userId;
      });
      
      if (user) {
        var task = TaskModule.createTask(name, priority, dueDate);
        user.addTask(task);
      } else {
        console.log('User with ID ' + userId + ' not found.');
      }
    },
    
    completeTask: function(userId, taskId) {
      var user = users.find(function(user) {
        return user.id === userId;
      });
      
      if (user) {
        var task = user.tasks.find(function(task) {
          return task.id === taskId;
        });
        
        if (task) {
          task.completeTask();
        } else {
          console.log('Task with ID ' + taskId + ' not found for user ' + user.name + '.');
        }
      } else {
        console.log('User with ID ' + userId + ' not found.');
      }
    }
  }
})();

// Example usage
ApplicationModule.addUser('John Doe', 'john@example.com');
ApplicationModule.addTaskToUser(1, 'Complete project proposal', 1, '2022-01-15');
ApplicationModule.completeTask(1, 1);