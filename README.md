## server-cluster

multiple json-server containers serving multiple json from multiple files

## to use

### add data

* add json files for each service in the config directory
* update the service*.js file so that it returns the data
* update the ports of the containers as needed. right now service1 is on port 1111, and service2 is on port 2222, etc.

### build and start up the containers

$ `docker-compose up`

### GET data

go to `localhost:1111` to view the json-server welcome page for service1

  * localhost:1111/people
  * localhost:1111/places

...same thing for service2

## for more info

* https://github.com/clue/docker-json-server
* https://hub.docker.com/r/clue/json-server
