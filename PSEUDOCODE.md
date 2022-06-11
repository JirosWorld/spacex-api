## Home Page thought process

1. make component (+ directory) for Company fetch + add component to App/Home page
2. fetch all from the API endpoint: https://api.spacexdata.com/v4/company <= is an object (!) instead of an array, so needs to be parsed into an Array multiple times
3. put Company output data in divs: Display the general company information: Name, summary, address + Display specific company details: company age (= a calculated difference between today's year and the founding year), locations, (social) urls
4. make component for Crew fetch + directory with styles
5. fetch all from the API endpoint: https://api.spacexdata.com/v4/crew
6. map Crew output data in List Items: Display a list of the SpaceX crew members: Photo, name, agency, wikipedia entry
7. create component for smaller listview, with a maximume of 3 items.
8. ...

## Crew Page thought process

1. make Crew page in pages folder
2. ...