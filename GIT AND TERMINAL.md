# Git Commands : 

1. `git init` <br>
Initialized empty Git repository in F:/React Developement/React Docs Based Projects/.git/

2. `echo "# React-Best-Practices" >> README.md`
3. `git add README.md`
4. `git commit -m "React Mini-Projects"` <br>
[master (root-commit) 31f3780] React Mini-Projects
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md

5. `git branch -M master`
6. `git remote add origin https://github.com/SURAJPATIL6088/React-Best-Practices.git`

7. `git push -u origin master` <br>
Enumerating objects: 3, done. <br>
Counting objects: 100% (3/3), done. <br>
Delta compression using up to 8 threads

### To Remove remote origin
8. `git remote remove origin`

# React + Vite Setup : 

1. `npm create vite@latest`

# Tailwind Installation in React + Vite : 
1. Install Tailwind CSS. <br>
Install tailwindcss and its peer dependencies, then generate your `tailwind.config.js` and postcss.config.js files.

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure your template paths <br>
Add the paths to all of your template files in your tailwind.config.js file.

***file : tailwind.config.js***
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


3. Add the Tailwind directives to your CSS. <br>
Add the `@tailwind directives` for each of   Tailwind’s layers to your `./src/index.css` file.

***file : index.css***
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Start your build process. <br>
Run your build process with npm run dev.

***Terminal***
```
npm run dev
```
5. Start using Tailwind in your project. <br>
Start using Tailwind’s utility classes to style your content.

***file : App.jsx***
```
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```
