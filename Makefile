.PHONY: help

all: npm-install npm-start

build:
	@npm run build

deploy:
	@npm run deploy

npm-install:
	@npm install

npm-start:
	@npm start

npm-test:
	@npm test

npm-build:
	@npm run build

npm-deploy:
	@npm run deploy

help:
	@echo "Makefile for Brainstorming Session"
	@echo "_"
	@echo "#=================================================="
	@echo "# Available targets:                              #"                             
	@echo "#  all              Build and start the project   #"
	@echo "#  build            Build the project             #"
	@echo "#  deploy           Deploy the project            #"
	@echo "#  npm-install      Install dependencies          #"
	@echo "#  npm-start        Start the project             #"
	@echo "#  npm-test         Test the project              #"
	@echo "#  npm-build        Build the project             #"
	@echo "#  npm-deploy       Deploy the project            #"
	@echo "#_________________________________________________#"
	@echo "#                                                 #"
	@echo "#ps1:                                             #"
	@echo "#                                                 #"
	@echo "#_________________________________________________#"