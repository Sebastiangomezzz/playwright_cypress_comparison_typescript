# OldMobiles.com

This is a small SPA react app that I built to showcase and compare two E2E testing frameworks, it is intended to become the base repo for a short talk at my current company, Atsistemas. It is a simple app that allows you to browse through a list of mobile phones and see their details. In the details page you can select some options for the phone and add it to a cart, where you will be able to remove items if desired.

## How to run the app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run lint`

Runs the linter to check for errors in the code.

## The prerequisites for this project are:
- Two views: a list of phones (ProductListPage) and a detail view of a phone (ProductsDetailPage).
- The list of phones should be fetched from the API endpoint provided.
- The detail view should be fetched from the API endpoint provided.
- The detail view should have a button to add the phone to the cart.
- All data should be persisted for one hour to avoid unnecessary API calls.
- The cart should be persisted in the browser's local storage.
- The cart should be accessible from all views.

## This SPA is built using the following technologies:

- React
- Redux RTK for state management and RTK Query for data fetching
- React Router
- React Bootstrap for styling and layout components
- Redux-persist for persisting the state to local storage
- Redux-persist-expire for expiring the persisted state after a certain time (1 hour)
- React-testing-library with Jest for testing

## Description of the views

### ProductListPage

This is the main page of the app. It displays a list of phones fetched from the API. It also has a search bar that allows you to filter the list of phones by name or brand. Each phone in the list is clickable and will take you to the detail view of that phone.

### ProductDetailPage

This page displays the details of a phone and a bigger pic of it. It has two selectable options: the color and the storage. If there's only one option for either of them, it will be selected by default. The user can also add the phone to the cart from this page. Once added, a toast will appear at the top of the screen to confirm the addition and the cart will have one more item.

### Common elements for both views

On the top of both views, there's a Navbar that has the branding of the page linking to ProductsDetailPage, a breadcrumb that shows the current view and a cart icon that shows the number of items in the cart. The cart icon has a tooltip for visualization of the number of items in cart. In a future release could be a modal with the items in the cart.

## Implementation details

### State management

The state management is done using Redux RTK. The state is divided in two slices: products and cart.\  The products slice is an API (productsApi) containing a set of two RTK-query queries (getProducts and getProduct) and a mutation (addProduct). This slice will keep the unused data for 1 hour directly managed from redux.\   The cart slice has the number of items in the cart and a reducer to add the new element. The reason to have one separated slice for the cart is the need to have a reducer to add the previous number with the new one (always 1) due to the external API always returning as a response to the mutation an object like this one {count:1}, with no increment. Therefore, the state of the cart slice is persisted to local storage using redux-persist and redux-persist-expire to expire the state after a certain time (1 hour).

### Data fetching

The data fetching is done using RTK Query. The API is defined in the products slice and the queries are used in the ProductListPage and ProductDetailPage components. The queries are cached for 1 hour to avoid unnecessary API calls.

### Styling

The styling is done using React Bootstrap. The components are styled using the Bootstrap components and the little custom CSS modifications are done in the index.css file or inline in the components.

### Testing

The testing is done using React Testing Library with Jest. The tests are done for some of the components. The tests are run using the command `npm run test`.

## Future improvements

- Add more tests

- Add a modal with the items in the cart

- Add a cart view where the user can see the items in the cart and remove them individually or clear whole cart

- Make the cart clickable and take the user to the cart view



