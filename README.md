# About react-technical-demo-app
This is a project I am working on during my free time -- for fun, to re-learn ReactJS and to show recruiters that I have been active in IT stuff since I graduated from university.

Why a ReactJS web app? Because I took a course about interaction programming and the dynamic web a few years ago, and I liked it very much. My ReactJS skills have gone rusty since that course, that's why I wanted to revive them and build something I like! ![corgi by ultimatearm at Flaticon](https://github.com/green-blue-couchette/react-technical-demo-app/assets/22916435/da3ee092-6df9-44ae-938a-4aed1fd65263)



## What it is
This is a multipage web app where I collect different ideas that I want to try my hand at. It's more of a technical demo rather than an application that does something _that_ useful. I might reuse elements from this project in other ReactJS projects that I have in mind. Stay tuned!

Started work on it on Tuesday, October 17, 2023


## How to use
This web app is currently not hosted on any public web server. Instead, fetch this repo and run `npm start` if you want to try it out.

You can navigate through the different pages of the app using the drop-down menu at the top of the page.
The current three pages are...
1) A gallery of animals  -- simple show/hide functionality as of now.
2) A page with trains -- It has a panel that plays back a TTS announcement in Romanian, and images that change depending on the selected train type.\
(Requires an API token and associated e-mail address to work with the TTS service at [Speechgen.io](https://speechgen.io/)) \
\
I chose to build this page because of my childhood interest in the railways. I used my railfan knowledge to figure out how to structure the TTS announcement, and what train types and accompanying photos to implement for the announcement panel.\
\
I might expand this page with more oprators and TTS languages.

3) A page about workouts -- kinda boring, just a static image as of now.


## How it is built
Currently, this web app uses the usual ReactJS building blocks -- `useState`, `useEffect`, `useRef`, functional components, props,  some conditional rendering, the JavaScript Fetch API for the TTS announcement, and lazy loading of certain large images.

(I call the app "multipage" even though I have not yet implemented routing. I plan to implement it.)

The architecture is not very faithful to the MVP architectural pattern as of now, but I might rewrite the code to change that.


## Other infos
### About copyrights
I am linking to photos, sound snippets and trademarks that belong to third parties to decorate my web app. I claim no ownership of these materials, unless I explicitly state somewhere in the web app that a photo or other asset was created by me.

## Screenshots
![Trains page - 2023-11-01 - compressed](https://github.com/green-blue-couchette/react-technical-demo-app/assets/22916435/9d37408a-6e66-4691-b6e1-30ec336b345d)
![Animals page - 2023-11-01 - compressed](https://github.com/green-blue-couchette/react-technical-demo-app/assets/22916435/ab7a4564-6e7f-48bb-b730-8aa19c294870)

