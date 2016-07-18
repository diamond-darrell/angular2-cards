# Angular 2 Cards
Test project implements an example of a todo-lists board application.
Each todo-list placed into "card" that can contain todo-lists (max 3 in a card).
The user must be able to add a new card, delete a card, set a title to it, add todo-lists into a card, and set a title to todo-list too.
Also, the user must be able to add a new todo, mark them as completed, and remove them.
##### All features:
###### Board:
- [x] add card;
- [x] remove card.

###### Card:
- [x] set card's title (also edit after set);
- [x] add todo-list;
- [x] remove todo-list.

###### Todo-list:
- [x] set todo-list's title (also edit after set);
- [x] add todo;
- [x] remove todo;
- [x] toggle todo (mark as completed and and vice versa);
- [x] edit todo.

##### The project uses:
* [Angular 2](https://angular.io/) (without TypeScript);
* [Webpack](https://webpack.github.io/) (instead of Angular2-CLI);
* [Node.js](https://nodejs.org/) (as backend, in the plans).

### Prerequisite
* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/) (at least node v4.x.x and npm 3.x.x)

### Development
1. `git clone https://github.com/diamond-darrell/angular2-cards.git`
2. `cd angular2-cards`
3. `npm install`
4. `npm run server`
5. Open [http://localhost:8080](http://localhost:8080) to see application

### Demo
[https://angular2-cards.herokuapp.com/](https://angular2-cards.herokuapp.com/)

It uses [json-server's](https://github.com/typicode/json-server) fake API with in-memory-db.
So data can disappear after restarting node.

### Components structure
```
AppComponent->BoardComponent
+---------------------------------------------------------------------------------------------------------+
|                                                                                                         |
|  FlashMessageComponent                                                                                  |
|  +---------------------------------------------------------------------------------------------------+  |
|  +---------------------------------------------------------------------------------------------------+  |
|                                                                                                         |
|  RowComponent                                                                                           |
|  +---------------------------------------------------------------------------------------------------+  |
|  |                                                                                                   |  |
|  |  CardHeaderComponent                                                                              |  |
|  |  +---------------------------------------------------------------------------------------------+  |  |
|  |  |                                                                                             |  |  |
|  |  |                                                                                             |  |  |
|  |  +---------------------------------------------------------------------------------------------+  |  |
|  |                                                                                                   |  |
|  |                                                                                                   |  |
|  |  +--------------------------------------------------+                                             |  |
|  |  |                                                  |                                             |  |
|  |  |  CardHeaderComponent                             |                                             |  |
|  |  |  +--------------------------------------------+  |                                             |  |
|  |  |  |                                            |  |                                             |  |
|  |  |  +--------------------------------------------+  |                                             |  |
|  |  |                                                  |                                             |  |
|  |  |  TodoListComponent                               |                                             |  |
|  |  |  +--------------------------------------------+  |    AddCardBtnComponent                      |  |
|  |  |  |                                            |  |    +------------------------------+         |  |
|  |  |  |          TodoItemComponent                 |  |    |                              |         |  |
|  |  |  |  +---+   +------------------------------+  |  |    |                              |         |  |
|  |  |  |  |   |   |                              |  |  |    |                              |         |  |
|  |  |  |  ++--+   +------------------------------+  |  |    |                              |         |  |
|  |  |  |   |                                        |  |    +------------------------------+         |  |
|  |  |  |   v                                        |  |                                             |  |
|  |  |  |  ToggleTogoBtnComponent                    |  |                                             |  |
|  |  |  |                                            |  |                                             |  |
|  |  |  +--------------------------------------------+  |                                             |  |
|  |  |                                                  |                                             |  |
|  |  |  TodoInputCompoenent                             |                                             |  |
|  |  |  +--------------------------------------------+  |                                             |  |
|  |  |  |                                            |  |                                             |  |
|  |  |  |                                            |  |                                             |  |
|  |  |  +--------------------------------------------+  |                                             |  |
|  |  +--------------------------------------------------+                                             |  |
|  |                                                                                                   |  |
|  +---------------------------------------------------------------------------------------------------+  |
|                                                                                                         |
|                                                                             AddRowBtnComponent          |
|                                                                             +------------------------+  |
|                                                                             |                        |  |
|                                                                             |                        |  |
|                                                                             |                        |  |
|                                                                             +------------------------+  |
|                                                                                                         |
+---------------------------------------------------------------------------------------------------------+
```