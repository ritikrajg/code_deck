# Code Deck | An Online IDE

![Code Deck Logo](https://via.placeholder.com/150x150.png?text=Code+Deck)

Code Deck is a powerful online code editor that allows you to create, edit, and run code snippets in multiple programming languages. It provides a flexible and intuitive interface for coding, with features like syntax highlighting, code execution, and more.

## 🚀 Features

- **Multi-language Support**: Write and run code in C++, Java, JavaScript, TypeScript, Python, and Rust
- **Theme Customization**: Choose from multiple editor themes including GitHub Dark/Light, Dracula, VS Code Dark, and more
- **Code Execution**: Run your code directly in the browser with real-time output
- **File Operations**: Upload and download code files easily
- **Input/Output Console**: Dedicated consoles for input and output with file upload/download support
- **Local Storage**: Save your code snippets and playgrounds locally
- **Fullscreen Mode**: Distraction-free coding with fullscreen support
- **Dark Mode**: Toggle between light and dark themes for the entire application
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Technologies Used

- **React.js**: Frontend library for building the user interface
- **CodeMirror**: Code editor component with syntax highlighting and more
- **Styled Components**: CSS-in-JS for component styling
- **Judge0 CE API**: Online compiler and execution system
- **Rapid API**: API marketplace for accessing Judge0 CE
- **Axios**: HTTP client for API requests
- **React Router**: Navigation and routing
- **React Select**: Dropdown components for language and theme selection
- **UUID**: Generating unique identifiers for playgrounds and folders

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## 🔧 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/ritikrajg/code_deck
   cd code_deck
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Rapid API key:
   ```
   REACT_APP_RAPID_API_KEY=your_rapid_api_key_here
   ```
   You can get a Rapid API key by signing up at [Rapid API](https://rapidapi.com/) and subscribing to the [Judge0 CE API](https://rapidapi.com/judge0-official/api/judge0-ce).

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 🚢 Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/code-editor"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Other Deployment Options

- **Netlify**: Connect your GitHub repository or drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository for automatic deployment
- **Firebase**: Use Firebase CLI to deploy to Firebase Hosting

## 📝 Usage

1. **Creating a New Playground**:
   - Click on "New Playground" to create a new code snippet
   - Select a language from the dropdown menu
   - Start coding!

2. **Running Code**:
   - Write your code in the editor
   - Add any required input in the input console
   - Click "Run Code" to execute

3. **Saving Code**:
   - Click "Save Code" to save your changes
   - Your code is automatically saved to local storage

4. **Changing Themes**:
   - Select a theme from the dropdown menu
   - Toggle dark/light mode using the theme switch in the navbar

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Judge0 CE](https://judge0.com/) for the code execution API
- [CodeMirror](https://codemirror.net/) for the code editor component
- [React Icons](https://react-icons.github.io/react-icons/) for the icons
- [React Select](https://react-select.com/) for the dropdown components
