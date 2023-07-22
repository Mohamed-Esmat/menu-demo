# Menu App Demo Project

This repository contains a simple demo project showcasing various frontend development concepts such as creating components, using the useState hook, passing data with props, lifting data up, and implementing conditional content. The project is designed to create a menu app where users can explore different menu items and filter them based on categories.

![App Logo](public/images/react.svg)

<!-- Add CSS Style for the Header Image -->
```
<style>
  .header-image {
    max-width: 200px;
    height: auto;
    text-align: center;
  }
</style>
```
## Project Overview

The Menu app allows users to view a list of menu items along with their respective images, titles, prices, and descriptions. Users can filter the menu items based on unique categories and view only the items that belong to a selected category. The application is built using React, and it demonstrates how to manage state, handle user interactions, and dynamically render components.

<!-- Display the Header Image -->
<p align="center">
  <img class="header-image" src="https://res.cloudinary.com/tawfeer/image/upload/v1690062789/menuproject_bxfd2s.png" alt="Header Image">
</p>

## Figma Design

The app's design and layout are based on the Figma prototype accessible through the following link: [Menu Figma Design](https://www.figma.com/file/PwlnSJXCuo4qD2o6EJiuj9/Menu?node-id=0%3A1&t=oaKVwYVqc9Oon2Ts-1)

## Getting Started

To run the Menu app on your local machine, follow the steps below:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/Mohamed-Esmat/menu-demo.git
cd menu-demo
```

2. Install the required dependencies.

```bash
npm install
```

3. Start the development server.

```bash
npm start
```

The app should now be running at `http://localhost:3000`.

## Components

The app is structured using the following components:

### Title Component

The `Title` component displays the main title of the app. It includes a small logo image in the header to enhance the app's visual appeal.

### Menu Component

The `Menu` component receives the menu items data as a prop and renders a `MenuItem` component for each item in the menu items array. It iterates over the list of menu items using the `map` method and passes the necessary data to each `MenuItem` component.

### MenuItem Component

The `MenuItem` component displays an image, title, price, and description for each menu item. It receives the data for each item as props and uses this data to populate its content.

### Categories Component

The `Categories` component receives the categories data as a prop and renders buttons for each category. It iterates over the categories array and attaches a filter function to each button, enabling users to filter menu items by category.

## Data

The menu items data is imported from `data.js`, which contains an array of objects. Each object represents a menu item and includes properties such as `title`, `price`, `imageUrl`, and `description`.

## State Management

The app uses the `useState` hook to manage state:

1. `menuItems` state: The `App` component sets up the menu items data as a state variable using the `useState` hook. This allows modifications to the data to be automatically reflected in the rendered output.

2. `categories` state: The `App` component also sets up the categories array as a state variable using the `useState` hook. Any changes to the categories will trigger a re-render of the `Categories` component.

## Filtering Functionality

The app implements filter functionality to display menu items that belong to a selected category:

1. The `App` component determines the unique categories from the menu items data using the `Set` object. An "all" category is added to this array to display all menu items.

2. The `Categories` component receives the categories state value as a prop and renders buttons for each category.

3. The `App` component defines a filter function that takes a category as a parameter and updates the state to show only the menu items that belong to that category.

4. The filter function is attached to the category buttons in the `Categories` component, enabling users to filter menu items by category.

## Contributing

We welcome and appreciate contributions to improve the Menu app! Contributing to open-source projects is a rewarding way to get involved in the community and make a positive impact. If you'd like to contribute, please follow these guidelines:

1. **Fork the repository:** Before making any changes, fork this repository to your own GitHub account.

2. **Create a new branch:** Create a new branch with a descriptive name for your changes (e.g., `feature/add-new-feature`, `fix/bug-fix`).

3. **Make your changes:** Implement your changes or additions to the project.

4. **Testing:** Ensure that your changes are thoroughly tested to maintain the app's stability.

5. **Commit your changes:** Commit your changes with clear and descriptive commit messages.

   ```bash
   git add .
   git commit -m "Add feature: Description of your changes"
   ```

6. **Push to your fork:** Push your changes to the branch on your forked repository.

   ```bash
   git push origin your-branch-name
   ```

7. **Create a pull request:** Once your changes are ready, create a pull request from your fork to this main repository. Provide a detailed description of your changes and why they should be merged.

   - **Ensure a clean commit history:** Keep your pull request as focused as possible. If you need to make further changes based on feedback, please squash your commits to maintain a clean commit history.

   - **Follow code style guidelines:** Adhere to the project's code style guidelines. Keeping the code consistent helps reviewers understand it better.

   - **Include tests:** If your contribution involves new features or changes to existing functionality, make sure to include appropriate test cases to maintain code reliability.

   - **Be patient:** Please be patient during the review process. Reviewers are volunteers and may have other commitments.

8. **Collaboration:** We will review your pull request and collaborate to ensure that your contribution is well-received and integrated into the project. Feel free to address any feedback or suggestions.

Let's work together to make the Menu app even better for everyone! Thank you for contributing!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

We extend our heartfelt gratitude to all contributors and open-source projects that inspired this app. The collaborative efforts of the community have been instrumental in shaping this project and making it what it is today.

## Contact

If you have any questions, feedback, or suggestions, please feel free to reach out to us at [msmt0452@gmail.com](mailto:msmt0452@gmail.com). We value your input and would love to hear from you!
