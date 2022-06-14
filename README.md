# Jiro's SpaceX company & crew

![schets](./src/assets/spacex-logo.png)

## instructions on how to run the application

Once you have cloned the project to your local machine, first install the `node_modules` by running the following command in a terminal/shell:

`npm install`

When this is done, you can launch the application using:

`npm start`

or use the 'npm start button' of your favorite IDE. Open http://localhost:3000 to view the Home page in the browser. This will also show navigation to the http://localhost:3000/crew-search Crew page.

### Assignment:
- create a Homepage with fetch to Company info + fetch all Crew + limit of 3 items and 'show more' button.
- create a Crew page with search/filter by name + sort-buttons (by name and agency).
- create session/local storage for giving a 'like' to Crew items/members that remains after browser refresh (NOTE: BROWSER REFRESH FEATURE DOESN'T WORK, can only be viewed in browser's `DevTools >> Application >> LocalStorage`).

### Documentation:
- https://github.com/r-spacex/SpaceX-API/tree/master/docs

## Hosting/deployment

You can run the application and see a live version here:

 * https://jiro-spacex.netlify.app/


## Technique
 * React
 * CSS
 * plug-in: Axios for fetching
 * plug-in: React-router-dom for pagerouting
 * my thinking in [pseudocode here](PSEUDOCODE.md).

## Not used...
* Typescript (_I am still in the early stages of learning this..._)
* testing/Jest (_have not written many front-end tests yet_)

~ _Jiro 2022_