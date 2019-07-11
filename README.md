# Hackernews Application
This is a GraphQL Application that was build based on the [GraphQL.js tutorial](https://www.howtographql.com/graphql-js/0-introduction/) on the [How to GraphQL](https://www.howtographql.com/) Website. This project is a GraphQL API designed for a [Hacker News](https://news.ycombinator.com/) clone ( i.e the API is designed for an application with similar features as the Hacker News). Users can view a feed of links to various resources along with a description of what the links entails. In this application Complete CRUD (CREATE , READ, UPDATE and DELETE) actions can be performed on the links by loggedin users.

---
## Tecnologies Used 
* [graphql-yoga](https://github.com/prisma/graphql-yoga)
* [Prisma](https://www.prisma.io/)
* [GraphQL Playground](https://github.com/prisma/graphql-playground)
* [Node](https://nodejs.org/)

## Setup
The following steps can be taken to setup this applcation locally. 
#####1. Clone the Repository
```
git clonehttps://github.com/JCanaks/hackernews-node-graphql.git
```
#####2. Move into the project directory
```
cd hackernews-node-graphql
```
#####3. Install Dependencies
```
yarn install
```
#####4. Install the Prisma CLI
```
yarn global add prisma
```
#####5. Deploy Prisma and database
```
prisma deploy
```
<b>NOTE:</b> When promted to specify where to deploy your service, choose the <b>Demo Server</b> which can be used for free in Prisma Cloud (You will be asked to register with Prisma Cloud via Github if you haven't done so previously).

#####6. Start the server and launch the Graphql Playground
```
yarn start # To start the server
yarn dev-start # For development purposes
```
Navigate to `http://localhost:4000` to test the API with the GraphQL playground and you are Good to Go! :tada::tada:




