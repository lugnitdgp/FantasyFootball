## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Requirements:

* NodeJS
   - [guide](https://nodejs.org/en/download/)
 
* npm
   - [guide](https://docs.npmjs.com/cli/install)
 
* Mongodb
  - The database used in the app is MongoDB, so it must be configured on you local machine. Follow the [guide](https://docs.mongodb.com/manual/administration/install-on-linux/) if you dont have MongoDB installed


### Prerequisites

You'll need to clone this repository to your local directory.

Open Terminal

`git clone https://github.com/v-rohan/FantasyFootball.git`


Open Terminal in the FantasyFootball folder (or by `cd FantasyFootball`)

`cd back-end`

`npm install` Installs the project dependencies


open a terminal window (a seperate one without closing the prior one) on your OS in the FantasyFootball folder.

`cd front-end`

`npm install` 

Installs the project dependencies





### Running the project

Open Terminal 

#Start MongoDB

`sudo service mongod start`

#Check Status

`sudo service mongod status`


open back-end folder and run Windows Command Prompt or Powershell or terminal window on your OS in the folder.

`node index.js`

This code will start the node server.

open the front-end folder and run Windows Command Prompt or Powershell or terminal window (a seperate one without closing the prior one) on your OS in this folder.


`npm run serve` 

This command will start the Vue server with the front-end app working at 
[http://localhost:8080/](http://localhost:8080/ "Your MEVN calendar app")

It's possible that the app maybe deployed on another port as well

## Built With

This app has been made using the MEVN stack.
Back-end - Express on Node
Front-end - Vue
Database - A Mongo Atlas online database


## Authors

* **V. Rohan Rao** 
* **Yash Vardhan Prasad**

for the **GNU/Linux User's Group, NIT DURGAPUR**


## Contributing

Clone the repository, make a seperate branch, open your issue and make a Pull Request.



