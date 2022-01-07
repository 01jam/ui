[![Twitch Status](https://img.shields.io/twitch/status/01jam?style=social)](https://www.twitch.tv/01jam)

# ui

This prepository is a boilerplate to easily create new react ui kit packages ready to be published to npm.

| Index                                                         |
| :------------------------------------------------------------ |
| [Getting Started](#getting-started)                           |
| [Automatic install - suggested](#automatic-install-suggested) |
| [Manual install](#manual-install)                             |
| [Usage](#usage)                                               |
| [Local testing](#local-testing)                               |
| [Publishing](#publishing)                                     |

### Expected features

The purpose of this repository is to ship a clean but complete boilerplate to develop and design new ui kit, pass by on [Twitch](https://www.twitch.tv/01jam) to follow the live development of the following features:

| Feature                                                      | Implemented |
| :----------------------------------------------------------- | :---------- |
| Full Typescript                                              | ✅          |
| [Storybook](https://github.com/storybookjs/storybook/)       | ✅          |
| [Fantasticon](https://github.com/tancredi/fantasticon)       | ⏸️          |
| All basic HTML inputs [list here](/src/components/todo.todo) | ❎          |

## Getting Started

You have two options:

1.  Automatic install - suggested;
2.  Manual install.

### Automatic install - suggested -

-   Run `npx @01jam/forge-ui <ui-package-name>`;
-   Done.

This command will create a `ui-package-name` folder with a ready-to-code scaffolding.

### Manual install

-   Clone this repository whenever you like `git clone https://github.com/01jam/ui.git`;
-   Do the following actions:
    -   Run `rm -fr .git` to remove the `.git` folder and avoid unwanted push to this repository;
    -   Open the `package.json` and update `name, version, description..` fields of your repository;
    -   Done.

By following these steps you will have the exact same output of the suggested automatic install.

### Usage

Open the folder using your favourite code editor and add your components inside the `src/components` folder, we have already created some basic standard components you can use as blueprint to generate your own.

You may notice that some `*.scss` files are using some variables, you can edit them from the `styles/variables.scss` files. This file will be compiled separately ready to be imported in your final app.

We decided to use `css` native variables because allow great flexibility and can be overwritten without any effort in order to customise your ui kit.

Once ready just launch `npm run build` command to build your ui kit package.

It ships:

-   UMD global package;
-   Common JS;
-   ES Module.

### Local testing

Before publishing you package to npm you can test it in your local development in the same way you would do for an online package.

How to setup a sample playground and test your ui kit (we will use `create-react-app` but you can use whatever React framework you like):

-   Move to a different location from the one you created your ui kit in - a.e. `cd ..`;
-   Create a new `create-react-app` whit typescript template using the following command: `npx create-react-app sample-ui-playground --template typescript`;
-   Move inside your playground project root a.e. `cd sample-ui-playground`;
-   Now install your local ui kit as you would for any other package a.e. `npm i ../ui-package-name`;
-   Import your components as you would do for any other ui kit a.e. `import {Button} from 'ui-package-name'`.

Depending on your code editor you may refresh your window each time you build a new version of your ui kit.
In this way you avoid the use of `npm link` and `npm unlink` each time you compile a new version of your ui kit and it will behave exactly like any other npm package.

### Publishing

First of all you must `npm login` to your account. By default the version of your ui kit will be `0.0.1-beta.0` to publish it as beta (suggested until you reach a working project) you can just execute `npm publish --tag beta` and et voilà, your package is ready to be installed with `npm i ui-package-name@0.0.1-beta.x`.
Once you are ready to publish a final version just remove the `-beta.x` and run `npm publish`, now it will be available with the `latest` tag and it can be installed with `npm i ui-package-name`.

Happy coding :))
