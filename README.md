# 🎬 Search-It: Movie Search App

A modern, responsive web application to search and explore movies using the [OMDb API](https://www.omdbapi.com/). Built with **React**, **Vite**, and **custom hooks**, **Search-It** offers a fast, intuitive user experience with live search, detailed movie info, theme support, and responsive design.

🔗 **Live Demo:** [search-it-coral.vercel.app](https://search-it-git-master-reshwanths-projects.vercel.app/)

---

## 🚀 Features

- 🔍 **Instant Movie Search**  
  Real-time search with debounced input for smooth performance and fast results.

- 🎥 **Detailed Movie Information**  
  View posters, plots, IMDb ratings, genre, release date, and more.

- 🌐 **Responsive Design**  
  Looks great on mobile, tablet, and desktop.

- 🌗 **Light & Dark Theme**  
  Toggle themes using React Context API for a personalized experience.

- 🧱 **Reusable Components**  
  Built with modular, reusable UI components like `MovieCard`, `Navbar`, etc.

- 🧠 **Custom React Hooks**  
  Clean and efficient state management using reusable custom hooks.

- 🛡️ **Error Handling**  
  Handles API/network issues gracefully with fallback UI.

- ⚡ **Blazing Fast Development**  
  Powered by **Vite** for super-fast dev server and optimized builds.

---

## 🛠️ Tech Stack

| Layer         | Tech                                |
|---------------|--------------------------------------|
| **Frontend**  | React + Vite                         |
| **Styling**   | CSS Modules                          |
| **State**     | React Context, Custom Hooks          |
| **API**       | [OMDb API](https://www.omdbapi.com/) |
| **Linting**   | ESLint                               |

---

## 📁 Project Structure

```
src/
├── apis/         # OMDb API integration
├── components/   # Reusable UI components
├── context/      # Theme context provider
├── hooks/        # Custom React hooks
├── pages/        # Main pages (Home, MovieDetails, Error)
├── routes/       # App routing
├── App.jsx       # Root component
└── main.jsx      # App entry point
```

---

## ⚡ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/reshwanthind/search-it.git
cd search-it
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

- Get a free API key from [OMDb API](https://www.omdbapi.com/apikey.aspx)
- Create a `.env` file in the project root:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```


---

<div align="center"> <strong>🎬 Lights. Camera. Search.</strong><br/> <em>Discover the magic of cinema, one query at a time.</em> ✨🍿 </div>