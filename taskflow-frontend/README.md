# Taskflow Frontend

This is a TypeScript React application that serves as a task management tool. It features a simple routing configuration and a modular structure for components, pages, and utilities.

## Project Structure

```
taskflow-frontend
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── common
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui
│   │       ├── Button.tsx
│   │       └── Input.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   └── About.tsx
│   ├── routes
│   │   └── RoutesConfig.ts
│   ├── hooks
│   │   └── index.ts
│   ├── utils
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   ├── styles
│   │   └── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd taskflow-frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- Home and About pages with basic routing.
- Reusable UI components such as buttons and input fields.
- Common components for header and footer.
- Custom hooks and utility functions for better code organization.

## Technologies Used

- React
- TypeScript
- Vite
- CSS

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.