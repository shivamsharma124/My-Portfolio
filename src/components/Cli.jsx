import React, { useEffect } from 'react'
import Macwindow from './Windows/Macwindow'
import { Terminal } from 'primereact/terminal'
import { TerminalService } from 'primereact/terminalservice'
import 'primereact/resources/themes/soho-dark/theme.css'
import 'primereact/resources/primereact.min.css'

const Cli = ({windowname, window, setwindow}) => {
  const commandHandler = (text) => {
    const cmd = text.trim().toLowerCase()
    let response

    if (cmd === 'help') {
      response = `Available commands:
  about          → Who am I
  skills         → My technical skills
  education      → My academic background
  projects       → Things I have built
  internships    → Work experience
  certifications → Courses & certs
  contact        → How to reach me
  clear          → Clear terminal`

    } else if (cmd === 'about') {
      response = `Hi! I'm Shivam Sharma
Frontend Developer passionate about building clean,
responsive web apps using React.js.
Currently pursuing B.Tech in CSE.
I love turning ideas into pixel-perfect interfaces.`

    } else if (cmd === 'skills') {
      response = `Technical Skills:
  Frontend  → React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind
  Backend   → Node.js, Express.js, REST APIs
  Database  → MongoDB, MySQL
  Tools     → Git, GitHub, VS Code, Postman
  Core      → DSA, OOP, Responsive Design`

    } else if (cmd === 'education') {
      response = `Education:
  B.Tech – Computer Science & Engineering
  Noida Institute of Engineering & Technology
  2023 – 2027 | CGPA: 8.64/10

  Intermediate – S.D.M. Inter College
  2021 | 83.33%`

    } else if (cmd === 'projects') {
      response = `Projects:
  GrowSome – AI Business Companion
  → React.js, Spring Boot, JWT, REST APIs
  → AI-powered entrepreneur platform

  Portfolio Website – iOS Style UI
  → React.js, CSS, Responsive Design
  → macOS-inspired portfolio

  Functional UI Component Library
  → HTML5, CSS3, JavaScript, Bootstrap
  → 13+ reusable UI components`

    } else if (cmd === 'internships') {
      response = `Internships:
  Currently seeking opportunities in
  Frontend / Full-Stack Development.
  Open to React, Node.js, or MERN stack roles.`

    } else if (cmd === 'certifications') {
      response = `Certifications:
  → React.js – Udemy / Coursera
  → JavaScript Algorithms & DS – freeCodeCamp
  → Responsive Web Design – freeCodeCamp
  → Git & GitHub – LinkedIn Learning`

    } else if (cmd === 'contact') {
      response = `Contact Me:
  Email    → shivamsharma2023@gmail.com
  LinkedIn → linkedin.com/in/shivamsharma
  GitHub   → github.com/shivamsharma
  Location → Noida, UP`

    } else if (cmd === 'clear') {
      setTimeout(() => {
        const content = document.querySelector('.p-terminal-content')
        if (content) content.innerHTML = ''
      }, 50)
      return

    } else if (cmd === '') {
      return
    } else {
      response = `command not found: ${cmd}
Type 'help' to see available commands.`
    }

    TerminalService.emit('response', response)
  }

  useEffect(() => {
    TerminalService.on('command', commandHandler)
    return () => TerminalService.off('command', commandHandler)
  }, [])

  return (
    <Macwindow windowname={windowname} window={window} setwindow={setwindow}>
      <Terminal
        pt={{
          root: { style: { background: 'transparent', height: '100%' } },
          content: { style: { color: '#00ff00' } },
          prompt: { style: { color: '#00ff00' } },
          input: { style: { background: 'transparent', color: '#00ff00', caretColor: '#00ff00' } },
          response: { style: { color: '#cccccc', whiteSpace: 'pre' } },
        }}
        welcomeMessage="Welcome to Shivam's Portfolio Terminal! Type 'help' to see all commands."
        prompt="shivam@portfolio:~$"
      />
    </Macwindow>
  )
}

export default Cli