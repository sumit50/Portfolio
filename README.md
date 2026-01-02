🌐 Animated Portfolio Website
A responsive and modern animated portfolio website built using React.js and Tailwind CSS.
This project is based on an open-source portfolio design and has been customized for personal use.

🚀 Live Demo
🔗 https://portfolio-liart-seven-ax1uhge5r1.vercel.app/

🛠️ Tech Stack
⚛️ React.js - Frontend library

🎨 Tailwind CSS - Utility-first CSS framework

⚡ Vite - Build tool

📦 React Parallax Tilt - 3D tilt effects

✍️ React Simple Typewriter - Typing animations

🚀 Vercel - Deployment platform

✨ Features
📱 Fully Responsive - Works on all screen sizes

✨ Smooth Animations - Tilt effects & typing animations

🎯 Modern UI/UX - Clean, professional design

🌈 Gradient Effects - Dynamic color transitions

⚡ Fast Performance - Optimized with Vite

🔧 Easy Customization - Modular components

📁 Project Structure
text
portfolio/
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── assets/
│   │   ├── tech_logo/     # Technology logos
│   │   ├── company_logo/  # Company logos
│   │   └── education_logo/# University logos
│   ├── constants/
│   │   └── index.jsx      # Data and configurations
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── README.md
🧑‍💻 Getting Started
1️⃣ Clone the Repository
bash
git clone https://github.com/sumit50/Portfolio.git
cd Portfolio
2️⃣ Install Dependencies
bash
npm install
# or
yarn install
3️⃣ Run Development Server
bash
npm run dev
# or
yarn dev
Open http://localhost:5173 in your browser.

4️⃣ Build for Production
bash
npm run build
# or
yarn build
🎨 Customization
Update Personal Information
Edit src/constants/index.jsx:

Update skills, experiences, education, and projects

Replace logo paths with your own

Update src/components/About/About.jsx:

Change name, title, and description

Update profile image path

Update Contact Information:

Modify contact details in Contact component

Change Colors
Edit Tailwind classes in components:

Primary color: #8245ec (purple)

Background: bg-gray-900, bg-gray-800

Text: text-white, text-gray-400

Add New Sections
Create new component files in src/components/ and import them in App.jsx.

📦 Dependencies
json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-parallax-tilt": "^1.7.0",
    "react-simple-typewriter": "^5.0.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.0.0",
    "vite": "^4.0.0"
  }
}
🚀 Deployment
Deploy to Vercel
Push your code to GitHub

Go to vercel.com

Import your repository

Click "Deploy"

Deploy to Netlify
Push your code to GitHub

Go to netlify.com

Click "New site from Git"

Select your repository

Build command: npm run build

Publish directory: dist

Click "Deploy site"

🎯 Key Components
🧑‍💻 About Section
Animated typewriter effect

Profile image with tilt effect

Download CV button

🛠️ Skills Section
4 categories (Frontend, Backend, Languages, Tools)

3×3 grid layout with gradient cards

Tilt animations on hover

🎓 Education Section
Timeline layout

Institution logos

Degree details and grades

💼 Experience Section
Company timeline

Role descriptions

Tech stack tags

📞 Contact Section
Contact form

Social media links

Direct contact info

🔧 Troubleshooting
Common Issues
Port already in use

bash
# Kill process on port 5173
npx kill-port 5173
Missing dependencies

bash
rm -rf node_modules package-lock.json
npm install
Build errors

Check all import paths

Verify all assets exist

Clear browser cache

📝 License
This project is open-source and available under the MIT License.

🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

👨‍💻 Author
Sumit Sharma

GitHub: @sumit50

Portfolio: Live Demo

