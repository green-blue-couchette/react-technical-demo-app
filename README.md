# About react-technical-demo-app
This is a project I am working on during my free time -- for fun, to re-learn ReactJS and to show recruiters that I have been active in IT stuff since I graduated from university.
Why a ReactJS web app? Because I took a course about interaction programming and the dynamic web a few years ago, and I liked it very much. My ReactJS skills have gone rusty since that course, that's why I wanted to revive them and build something I liked! ![corgi by ultimatearm at Flaticon](https://github.com/green-blue-couchette/react-technical-demo-app/assets/22916435/da3ee092-6df9-44ae-938a-4aed1fd65263)

Started working on it on Tuesday, October 17, 2023.

## What it is
This is a web app where I plan to implement a collection of a few mini-applications that I think might be fun, based on my own interests. I might reuse elements from this project in other ReactJS projects that I have in mind. Stay tuned!

These are the pages currently available on this webapp:
1) Home -- Just an explanation of the webapp.
2) A page with trains -- It has a panel that plays back a TTS announcement in Romanian, and images that change depending on the selected train type.\
(Requires an API token and associated e-mail address to work with the TTS service at [Speechgen.io](https://speechgen.io/)) \
I chose to build this page because of my childhood interest in the railways. I used my railfan knowledge to figure out how to structure the TTS announcement, and what train types and accompanying photos to implement for the announcement panel.\
I might expand the Trains page with more railway operators and TTS languages.


## How to use
This web app is currently not hosted on any public web server. Instead, fetch this repo and run `npm start` if you want to try it out.


## How it is built
Currently, this web app uses the usual ReactJS building blocks -- `useState`, `useEffect`, `useRef`, functional components, props, some conditional rendering, the React Router (DOM), the JavaScript Fetch API for the TTS announcement, and lazy loading of certain large images.

The architecture is not very faithful to the MVP architectural pattern as of now, but I might rewrite the code to change that.


## Other infos
### Future
I plan to implement other mini-apps into this project, including one that likely stores data in a database somewhere -- "Log in, and see what you posted, from any computer!"
I also plan to rewrite the architecture of the Trains page to follow the MVP architecture pattern.

### Recent redesign
I recently trashed some pages that I wasn't interested in further developing, and gave the app a real visual make-over!

### About copyrights
I am linking to photos, sound snippets and trademarks that belong to third parties to decorate my web app. I claim no ownership of these materials. I aim to provide attribution info wherever appropriate.

## Screenshots
![Home page](https://github.com/green-blue-couchette/react-technical-demo-app/assets/22916435/cf338f9f-6e65-4502-b55a-9dbcfa8ec364)
![demo-react-app-new-compressed](https://github.com/green-blue-couchette/react-technical-demo-app/assets/22916435/773addcd-53a0-4e2c-9bd2-939608868132)