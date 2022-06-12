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
2. add React Router (new version) syntax on index.js and define Routes to App ("/*")
3. import Link from BrowserRouter + add links/nav
4. add Link from Home to Crew page
5. add Fetch function to get all crew members
6. display data of all crew members
7. create query useState and query function, wrap search function around display Map (data returned from an API may change, so do not use "const search_parameters = ["Name", "Agency", ...]")
8. test if display changes when typing search-text in the input
9. to create Show All function: add selectbox, based on Agency keys/values
10. get the Agencies from the data `const filter_items = [...new Set(data.map((item) => item.agency))]`
11. add Filter state for selectbox
12. add "`item.agency.includes(filter)`" to the search query to narrow down results
13. Sort function: create component with radio buttons for name/agency
14. Sort function: `sortedItems = allItems.sort((a, b)`
15. pay attention to props (can only be passed downwards)
16. setItmes = data to sortItems, trying to combine these with the Data displayed

## 'Like' button thought process

1. Selecting a crew member on “/” or “/crew” should add a visual label
2. difference between `session storage` and `local storage`:
3. ...