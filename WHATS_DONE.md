# WHAT'S DONE

- Structure the Angular app project by grouping auction-related functionalities in a distinct folder named **auctions**, with a **common** folder containing shared services and models.

- The `auction.service` service contains all the necessary logic to calculate the winning bidder.

  - It takes two inputs: the list of bidders and the reserve price.
  - As output, it returns a "Winner" object containing the name of the winning bidder along with the amount of their bid.

- Create an `auction-form` component for the new bidder addition form.

  - This component is designed to be reusable, for example, for editing an existing bidder.

- Create an `auction-list` component to display the list of bidders added via `auction-form`.

  - This component uses the **Material library** for an elegant user interface.

- The `auction-form` & `auction-list` components are used in the `auction-kata` component.
  - This component manages the addition of the reserve price and calls the "auction.service" to calculate the winning bidder.

### Best Practices

- Properly structure the project.
- Properly type all functions and variables to ensure code robustness and clarity.
- Add a linter and a prettier to maintain code consistency and detect potential errors.
