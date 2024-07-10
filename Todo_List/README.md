# Todo List Application

This is a simple Todo List application built with Go, Chi router, and MongoDB. It provides CRUD operations for managing todo items.

## Features

- Create a new todo item
- Retrieve all todo items
- Update an existing todo item
- Delete a todo item

## Prerequisites

- Go 1.16+
- MongoDB

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/codescalersinternships/Todo_List_Marina_Emad.git
cd Todo_List_Marina_Emad


### Run the Application

1. Ensure MongoDB is running on your machine. If MongoDB is not installed, follow the instructions [here](https://docs.mongodb.com/manual/installation/) to install it.

2. Update the MongoDB URI in the `init` function of `main.go` if necessary. By default, it is set to `mongodb://localhost:27017`.

3. Run the application:

   ```sh
   go run main.go
