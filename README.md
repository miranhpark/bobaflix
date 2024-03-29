# 🧋 bobaflix 🍿
![example screenshot of the bobaflix UI](https://github.com/miranhpark/bobaflix/blob/dev/bobaflix_screenshot.png?raw=true)

## `README` 📖
- Requires [Node.js](https://nodejs.org/en); please make sure `npm` is installed and available
- `bobaflix` uses data from the [Yelp API](https://docs.developer.yelp.com/reference/v3_business_search) to find boba shops!
  - Parameters:
    - Within approximately 6~ miles (10,000 meters)
    - Near any of the following 3 Netflix offices (choose one):
        - 121 Albright Way, Los Gatos, CA 95032
        - 888 Broadway, New York, NY 10003
        - 5808 Sunset Blvd, Los Angeles, CA 90028
- Using the column headers, you should be able to sort by both rating and distance
  - Hover near the column name and click on the arrow that appears to reverse the sort
  - Or, alternatively, click on the kebab menu on the right of the column name for more  options
- Use the page navigation at the bottom to load more results (up to 50)

## Usage 🖥️
- On first use, please run `npm install` to install dependencies
- To start both the server and client, please set the Yelp API token as an environmental variable:
  - e.g. `export YELP_API_TOKEN=<my-secret-token>`
- Once the API key is available, please run `npm start` from the root directory
- If the browser doesn't automatically open, please go to `http://localhost:3000` to use the app

## Some process thoughts 🧠
- The frontend client uses [Material UI](https://mui.com/) (also known as MUI) and [React](https://react.dev/) for UI components, formatting, and organization (running on port 3000)
- The backend server uses the [Express.js](https://expressjs.com/), a relatively common HTTP framework (running on port 3001)
- Right now, every time we switch a location selection there's a Yelp API call
  - If we needed to serve more traffic, it would be great if these results could be cached and/or stored (though the Yelp API TOS has some rules about it!), given you can only make 500 calls a day 😅
- I _definitely_ focused on having a frontend here, and didn't get around to tests, so please seriously consider this as `dev` and not production! 🫠
  - Next steps would definitely be adding at a minimum, something like some `jest` React component-rendering tests, and basic http/API/unit tests for internals
  
## `TODO`s/`FIXME`s/nice-to-haves 🛠️
- I tried to do most of this in Typescript, but definitely had to leave some `any`s around
- Still need to clean up some of the `eslint` lint!
- The app assumes the API key is valid, but I would have loved to have some checking/validation/error handling around that
- The Yelp API has an in-beta GraphQL endpoint which might have been nice here if it works, given we used so few fields
- I didn't do a great job of distinguishing between `dev` (think: `npm -D install dev deps`) and production required dependencies for now (nor for `npm` scripts)
- CORS is enabled freely here since we're operating locally client-to-server
- Unfortunately, I ran out of time to make sure all the components were accessible/properly aria-label-ed, but would love to
- Pretty minor, but I would have also loved to add some better styling (and put it into individual style-sheets for components)