[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/tGww7mMr)
# React JS - Storybook Exercise

Goal: To create your own stories for Storybook of your React component.

## Instructions

1. Create a new React project by running `npm create vite@latest storybook-exercise`.
2. Set up Storybook in the same React project by running `npm create storybook@latest`.
3. Run your Storybook using the command `npm run storybook` in your terminal.
4. Create a new component called `CustomToast.tsx`.
5. Create 3 stories for the component, where the 3 possible states are:
   - Success (lightgreen background with ✅ emoji)
   - Warning (light orange background with ⚠️ emoji)
   - Error (light red background with ❌ emoji)

6. For the component props, use:
   - status (union type) - `success | warning | error`
   - text (string)
   - hasIcon (boolean) - if set to `false`, show no emoji

7. For the `CustomToast.stories.tsx` file, make sure to set the layout to `centered` and add the `'autodocs'` tag so that it automatically creates a **Docs** page for the component stories.

8. Set the texts and emojis for the 3 stories respectively. You should have 3 stories of _Success, Warning, and Error_.

9. Commit and push your changes.

Good luck 🎉🎉🎉
