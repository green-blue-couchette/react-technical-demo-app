# About react-technical-demo-app
This is a project I am working on during my free time – for fun, to re-learn ReactJS and to show recruiters that I have been actively working with Tech skills since I graduated from university.
Why a ReactJS web app? Because I took a course about interaction programming and the dynamic web a few years ago, and I liked it very much. My ReactJS skills have gone rusty since that course, that's why I wanted to revive them and build something I like! ![corgi by ultimatearm at Flaticon](https://github.com/green-blue-couchette/react-technical-demo-app/assets/22916435/da3ee092-6df9-44ae-938a-4aed1fd65263)

Started working on it on Tuesday, October 17, 2023.

## What it is
These are the pages currently available on this webapp:
1) Home – Just an explanation of the webapp.
2) A page with trains – It has a panel that plays back a TTS announcement in Romanian, and images that change depending on the selected train type.

The Romanian language was a personal preference based on my home country.\
I built this webapp because of my childhood interest in the railways. I used some of my railway knowledge to design the structure the TTS announcement, and for the train types and accompanying photos to implement.

> **NOTE**: TTS spoken announcement requires an API token and associated e-mail address to work correctly. Uses the [Speechgen.io](https://speechgen.io/) REST API.

## How to run
Fetch this repo and run `npm start` to try it out. This web app is currently not hosted on any public web server.


## How it is built
This web app uses the usual ReactJS building blocks – `useState`, `useEffect`, `useRef`, functional components, props, some conditional rendering, the React Router (DOM), the JavaScript Fetch API for the TTS announcement, and lazy loading of certain large images.

The architecture is not very faithful to the MVP architectural pattern as of now, but I might rewrite the code to change that.


## Other information
### Future
I plan to...\
– Rewrite the architecture of the web app to follow the MVP architecture pattern.\
– Add more railway operators with their local language used for the TTS (e.g. English for AMTRAK and Swedish for SJ).

### About copyrights
I am linking to photos, sound snippets and trademarks that belong to third parties to decorate my web app. I claim no ownership of these materials. I aim to provide attribution info wherever appropriate.

## Screenshots
![demo-react-app-new-compressed](https://github.com/green-blue-couchette/react-technical-demo-app/assets/22916435/773addcd-53a0-4e2c-9bd2-939608868132)
