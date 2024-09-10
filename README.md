# UI Template for Basic Vue 3 Mobile Apps

This project provides a UI template for a mobile application built with Vue 3. The template includes a responsive layout and essential components such as:

- Top Navigation
- Bottom Navigation
- Search Bar
- Consent Page (Cookies Page)
- 404 Page

This app template is built using [Vite](https://vitejs.dev/), which is a Front-end Build Tool. The Front-end is based on [Vue3](https://vuejs.org/) with TypeScript. Vue is a Progressive JavaScript Framework. The CSS-Framework [Tailwind](https://tailwindcss.com/) is used for Styling.

## Features

- Vue 3 Composition API: Built using the latest features of Vue 3.
- Responsive Design: Optimized for mobile devices.
- Top Navigation: A top navigation bar that can be customized with different menu items.
- Bottom Navigation: A fixed footer navigation bar for quick access to different sections.
- Search Bar: A functional search bar to filter or navigate content.
- Consent Page: A dedicated page for users consent, such as cookie or privacy agreements.

## Installation

Clone this repository:

```sh
git clone https://github.com/lllindemann/vue-base-app.git
```

Navigate to the project directory:

```sh
cd app
```

Install dependencies:

```sh
pnpm install
```

Run the development server:

```sh
pnpm run dev
```

Open the app in your browser via local host.

Once the project is running, you can start customizing the components to fit your app’s needs:

- Top Navigation: Modify the `components/TheTopNavigation.vue` component to adjust the navigation links or icons.
- Bottom Navigation: Customize the `components/TheBottomNavigation.vue` component to define your bottom navigation.
- Search Bar: The `components/TheSearchBar.vue` component can be used to filter content or handle search queries.
- Consent Page: Update the Cookie Banner in the `pages/consent.vue` with your privacy and data policies.

## Structure

The Vue3 [documentation](https://vuejs.org/) gives a much better overview of the project structure than me, so check it out.

## Customization

You can easily customize this template by modifying the components under the src/components directory. Update the styles, icons, and functionality to suit your specific mobile app requirements.

For styling, the project uses CSS and TailwindCSS.

## Used Frameworks

### Tailwind (CSS)

The Tailwind [documentation](https://tailwindcss.com/docs) gives a much better overview of all the Tailwind utility classes than me, so check it out.
The core Theme Configuration is stored within the [tailwind.config.js](tailwind.config.js) file at the root of the project. The file defines the default theme of the project.

### Fontawesome (Icons)

For Icon integration we use the Fontawesome Icon Libary. On the Fontawesome [Website](https://fontawesome.com/) you can find the [Icon Libary] (https://fontawesome.com/icons) and [WebDocs](https://fontawesome.com/docs/web/).

Icons you would like to use within a .vue file can be imported as following within the `<script>` section:

```
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faPerson
} from "@fortawesome/free-solid-svg-icons";

//ADD ICONS to FONTAWESOME Lib
library.add(faPhone, faPerson);

...

//ADD ICONS to FONTAWESOME Lib
library.add(faMap, faQrcode, faList, faCircleQuestion, faCalendarDays, faScroll, faUser);
```

## Tools

### Visual Studio Code

We recommend to use [Visual Studio Code](https://code.visualstudio.com/) as development environment. It supports syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.

We recommend the installation of the following VS-Code Plugins for syntax highlighting and intelligent code completion:

#### Tailwind CSS IntelliSense

As Tailwind is used as CSS framework for the website, we recommend to install the [Tailwind CSS IntelliSense Plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for VS-Code.
The Tailwind CSS IntelliSense plugin provides autocomplete, syntax highlighting, and linting of Tailwind code features for Visual Studio Code.

## Official Resources

- [Vite Docs](https://vitejs.dev/)
- [Vue 3 Docs](https://vuejs.org/)
- [Tailwind Docs](hhttps://tailwindcss.com/)

Happy coding! ✨
