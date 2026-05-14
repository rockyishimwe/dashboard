# React Dashboard

A React admin dashboard built with Syncfusion UI components, Tailwind CSS, and React Router.

## Features

- Light and dark mode support
- Custom theme color selector
- Dashboard overview page (`/ecommerce`)
- Data pages for Orders, Employees, and Customers
- App pages for Kanban, Rich Text Editor, Calendar, and Color Picker
- Chart pages for Line, Area, Bar, Pie, Financial, Color Mapping, Pyramid, and Stacked charts
- Global UI elements (sidebar, navbar, theme settings panel, chat/cart/notifications)

## Tech Stack

- React 17
- React Router DOM 6
- Syncfusion React components
- Tailwind CSS
- CRACO (Create React App config override)

## Routes

- `/` and `/ecommerce`
- `/orders`
- `/employees`
- `/customers`
- `/kanban`
- `/editor`
- `/calendar`
- `/color-picker`
- `/line`
- `/area`
- `/bar`
- `/pie`
- `/financial`
- `/color-mapping`
- `/pyramid`
- `/stacked`

## Getting Started

### Prerequisites

- Node.js 16 or newer
- npm

### Installation

```bash
cd dashboard
npm install
```

### Run in Development

```bash
npm start
```

Then open `http://localhost:3000`.

### Production Build

```bash
npm run build
```

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the app for production
- `npm test` - Runs tests in watch mode
- `npm run eject` - Ejects CRA configuration (irreversible)

## Project Structure

```text
dashboard/
  src/
    components/      # Reusable UI components
    contexts/        # Global state/context provider
    data/            # Dummy data and image assets
    pages/           # Route pages (including ColorPicker.jsx)
  public/
```

## Notes

- Theme mode and color are persisted in `localStorage`.
- Main app routing is defined in `src/App.js`.
