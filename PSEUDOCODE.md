## Home Page thought process

1. make component (+ directory) for Company fetch + add component to App/Home page
2. fetch all from the API endpoint: https://api.spacexdata.com/v4/company <= is an object (!) instead of an array, so needs to be parsed into an Array multiple times
3. take care to set useState to the right types (obj {} or arr [])
4. put Company output data in divs: Display the general company information: Name, summary, address + Display specific company details: company age (= a calculated difference between today's year and the founding year), locations, (social) urls
5. make component for Crew fetch + directory with styles
6. fetch all from the API endpoint: https://api.spacexdata.com/v4/crew
7. map Crew output data in List Items: Display a list of the SpaceX crew members: Photo, name, agency, wikipedia entry
8. create component for smaller listview, with a maximume of 3 items.
9. 3 items limit: needs to be a sliced Array and needs React useMemo: only runs when one of its dependencies update.
10. fix: every time the 'show more' button is clicked, React keeps the window on the same view, so add scrollTo bottom function.

## Crew Page thought process

1. make Crew page in pages folder
2. add React Router (new version) syntax on index.js
3. add Link from Home to Crew page
4. ...