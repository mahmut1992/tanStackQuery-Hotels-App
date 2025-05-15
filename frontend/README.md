# Ts-TanStack-Hotels-App

This project is a modern web application developed for hotels/accommodation facilities. It's built using React, TypeScript, TanStack Query, and Express.

## Project Structure

The project consists of two main parts: frontend and backend:

```
.
├── frontend/     # React and TypeScript based frontend application
├── backend/      # Express based API server
```

## Features

- 📋 List and filter accommodation facilities
- 🔍 Search by name and location
- ⭐ Sort facilities by price or rating
- ➕ Add new accommodation facilities
- 🗑️ Delete existing facilities
- 📱 Responsive design

## Technologies

### Frontend

- **React 19** - Modern user interface development library
- **TypeScript** - Static type definitions
- **React Router** - Page routing and navigation
- **TanStack Query** - Data fetching and caching
- **Formik** and **Yup** - Form management and validation
- **Tailwind CSS** - Style and design components
- **React Icons** - Icon library
- **React Toastify** - Notification management
- **Vite** - Fast development and build tool



### Backend

- **Express** - Node.js web application framework
- **Cors** - Cross-Origin Resource Sharing support
- **Nodemon** - Automatic server restart

## Installation and Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

```bash
# Go to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm start
```

The server will run on port 4001 by default.

### Frontend Setup

```bash
# Go to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend application will run at http://localhost:5173 by default.

## API Endpoints

| Endpoint         | HTTP Method | Description                                                                                 |
| ---------------- | ----------- | ------------------------------------------------------------------------------------------- |
| `/api/places`    | GET         | Lists all accommodation facilities. Supports filtering: `?title=...&location=...&order=...` |
| `/api/places`    | POST        | Adds a new accommodation facility                                                           |
| `/api/place/:id` | GET         | Gets the facility with the specified ID                                                     |
| `/api/place/:id` | DELETE      | Deletes the facility with the specified ID                                                  |

## Frontend Pages

- **Home (`/`)** - Lists all accommodation facilities and provides filtering options
- **Detail (`/place/:id`)** - Shows details of a specific accommodation facility
- **Form (`/form/create`)** - Form for adding a new accommodation facility

## Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Mahmut Fırat Şabahat - fratsbht@icloud.com

Project Link: [https://github.com/mahmut1992/tanStackQuery-Hotels-App](https://github.com/mahmut1992/tanStackQuery-Hotels-App)
