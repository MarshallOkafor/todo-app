# Simple todo app backend 
This project is a simple todo application developed using Node.js and Express.js. We used Express.js web framework and in-memory storage ease of development and simplicity.

# Storage
A json object in RAM
```
data = {
    todo1:{
        "id":1,
        "desc":"some task",
        "done": false
    },
    todo2:{
       "id":2,
        "desc":"some task"
        "done": true
    }
}

```


# APIs
1. GET get all todos
2. POST add new todo
3. DELETE delete todo
4. PUT modifiy todo
5. POST /done mark todo as complete

# Getting Started
You will need to install ```Node.js``` and ```npm``` to run the application. If you are using Linux, you can use the command below:
```
sudo apt install nodejs npm
```

### Mac Users
You can use homebrew to install using the command below:
```
brew install node
```
This would install both ```Node.js``` and ```npm```

### Windows Users
Visit [Node official website](https://nodejs.org/en/download) to download the Node.js source code or a pre-built installer for your platform.

## Running the application  
Clone the repo and ```cd``` into the directory. Use the command below in the root directory of the clone repo to install the dependencies:  
```
npm install
```  
This would install ```exress``` which is in the dependency section of the ```package.json``` file.To run the application i.e. start the server, you use the command below to run the ```main.js``` file.  
```
node main.js
```

### Test the APIs
You can use Postman API platform to test all of the APIs.
