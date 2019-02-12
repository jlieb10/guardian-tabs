## Tabbed Content Code Example Brainstorm/Notes

- Can be viewed live [here](https://guardian-tabs-lieberman.herokuapp.com/)
- Bootstrapped with create-react-app (information below)
- To run: `git clone`, `cd guardian-tabs`, `npm i` || `yarn install`, `yarn start` || `npm start`

## High-Level Requirements/Stories:

- Component should have three headers (UK News, Sports, Travel)
- Component should have three numbered lists of articles (UK News, Sports, Travel)
- Only one list of articles should appear at a time
- Only one header should appear to be 'active' or 'open' at a time
- The list of articles should correspond with the active/open header

## Fulfillment:

- Use Boilerplate for efficiency
- `yarn create react-app` results in a quick boilerplate which will save time coding and show a familiarity with the widely-used framework

## More Detailed Considerations:

### Tab functionality:

- Option 1: Tabs can be completed with pure CSS and HTML attributes (lightest weight)
- Option 2: Tabs can also be completed using React synthetic event handlers (possibly more readable, would allow for articles to be fetched on demand)

### Data fetching:

- Lightest-weight option is to use Fetch + fetch polyfill for cross browser support
- Option 1: Fetch all data at once
- Option 2: Fetch data depending on which tab is active
- Option 3: Fetch data depending on which tab is active then save it so no further fetches are required (could be a future improvement)

### Styling:

- BEM-style SASS sheets
- Guardian colors and type from the [Style Guide](https://design.theguardian.com/)
- Flexbox with legacy fallbacks provided in the SASS processing pipeline

### Components Needed:

- One 'container' for the tabbed content headers and articles
- Individual 'cards' for the articles (can be "pure"/stateless)

### Ideas for future improvement:

- Lazy-load and store the data from the `fetch` requests so no more than three calls are made
- Add pagination feature to fetch more stories on the current topic
- Add tests

---

(Relevent info from create-react-app readme):

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
