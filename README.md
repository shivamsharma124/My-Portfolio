ad# Portfolio Website

A modern, interactive portfolio website built with React, featuring a macOS-inspired desktop interface with draggable windows for showcasing projects, resume, and more.

## 🚀 Features

### Desktop Interface
- **macOS-style Windows**: Draggable, resizable windows with traffic light controls
- **Window Management**:
  - 🔴 Close window
  - 🟡 Minimize window
  - 🟢 Full screen toggle
- **Dock**: Bottom navigation bar with app icons

### Applications
- **GitHub Projects**: Display portfolio projects in card format
- **Terminal CLI**: Interactive command-line interface with portfolio commands
- **Resume Viewer**: PDF resume display
- **Notes**: Markdown notes viewer with syntax highlighting
- **Spotify**: Embedded music player

### Terminal Commands
```
help          → Show available commands
about         → Personal introduction
skills        → Technical skills
education     → Academic background
projects      → Project showcase
internships   → Work experience
certifications→ Courses & certificates
contact       → Contact information
portfolio     → Command summary
clear         → Clear terminal
```

## 🛠️ Technologies Used

### Frontend Framework
- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and dev server

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PrimeReact** - UI component library for terminal

### Functionality
- **React RND** - Draggable and resizable components
- **React Markdown** - Markdown rendering
- **React Syntax Highlighter** - Code syntax highlighting
- **React Console Emulator** - Terminal simulation

### Development Tools
- **ESLint** - Code linting
- **Vite Plugin React** - React integration for Vite

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Usage

### Navigation
- Click dock icons to open applications
- Drag windows around the screen
- Use window controls for minimize/maximize/close

### Terminal Usage
- Type `help` for command list
- Use portfolio commands to view information
- Commands provide detailed information about skills, projects, etc.

### Customization
- Update `src/assets/github.json` for project data
- Modify `public/resume.pdf` for resume
- Edit `public/notes.txt` for notes content
- Update `src/components/Cli.jsx` for terminal commands

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── bg.jpg              # Background image
│   ├── resume.pdf          # Resume file
│   ├── notes.txt           # Notes content
│   └── doc_img/            # Dock icons
├── src/
│   ├── assets/
│   │   └── github.json     # Projects data
│   ├── components/
│   │   ├── Windows/
│   │   │   ├── Macwindow.jsx   # Window component
│   │   │   ├── Github.jsx      # Projects display
│   │   │   ├── Card.jsx        # Project card
│   │   │   └── ...
│   │   ├── Cli.jsx         # Terminal component
│   │   ├── Doc.jsx         # Dock component
│   │   ├── Nav.jsx         # Top navigation
│   │   ├── Resume.jsx      # Resume viewer
│   │   ├── Notes.jsx       # Notes viewer
│   │   └── Spotify.jsx     # Music player
│   ├── App.jsx             # Main app component
│   └── main.jsx            # App entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Dark theme with glassmorphism effects
- Responsive design
- Custom animations and transitions
- macOS-inspired UI elements

## 🚀 Deployment

### Vercel/Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Shivam Sharma**

---

*Built with ❤️ using React and modern web technologies*
