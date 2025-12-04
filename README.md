# Academic Portfolio Website

A clean, minimalist, and accessible academic portfolio website built with [Gatsby](https://www.gatsbyjs.com/) and [React](https://reactjs.org/). Designed for academics and professionals to showcase their education, experience, skills, and projects.

## 🚀 Features

-   **Minimalist Design**: Clean layout focused on content and readability.
-   **Dark/Light Mode**: Robust theme toggle with persistence (defaults to Dark Mode).
-   **Responsive**: Fully responsive design that looks great on mobile, tablet, and desktop.
-   **SEO Optimized**: Built-in SEO best practices with metadata configuration.
-   **Markdown Content**: Manage your Experience and Projects easily using Markdown files.
-   **Animations**: Subtle scroll animations using `scrollreveal`.

## 🛠️ Tech Stack

-   **Framework**: Gatsby (React)
-   **Styling**: Styled Components
-   **Icons**: React Icons (FontAwesome, etc.)
-   **Animation**: React Transition Group, ScrollReveal

## 🏁 Getting Started

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/academic-portfolio.git
    cd academic-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm start
    ```
    The site will be running at `http://localhost:8000`.

    To stop the server, press `Ctrl + C` in the terminal.

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The generated files will be in the `public` directory, ready to be deployed to GitHub Pages, Netlify, or Vercel.

## 📂 Project Structure

```
/
├── content/             # Markdown files for Jobs and Projects
│   ├── jobs/            # Experience entries
│   └── projects/        # Project entries
├── src/
│   ├── components/      # React components (Hero, About, Nav, etc.)
│   ├── images/          # Static images
│   ├── pages/           # Page templates (index.js, 404.js)
│   ├── styles/          # Global styles, theme, and mixins
│   ├── utils/           # Utility functions
│   └── config.js        # Main configuration (social links, colors)
├── static/              # Static assets (resume.pdf, favicon)
└── gatsby-config.js     # Gatsby configuration and plugins
```

## 🎨 Customization

### Configuration
Edit `src/config.js` to update:
-   Email address
-   Social media links
-   Navigation menu items
-   Theme colors

### Content
-   **Experience**: Add new folders in `content/jobs/` with an `index.md` file.
-   **Projects**: Add new folders in `content/projects/` with an `index.md` file.
-   **Bio**: Update the text in `src/components/hero.js` and `src/components/about.js`.

### Resume
Replace the `resume.pdf` file in the `static/` directory with your own.

## 🤝 Credits

-   Original design architecture based on [v4](https://github.com/bchiang7/v4) by Brittany Chiang.
-   Adapted and customized by Yousef Akbari.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
