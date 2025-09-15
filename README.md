# VS Code File Explorer Clone

A React-based file and folder management system that mimics the VS Code file explorer interface with interactive nested structure functionality.

## 🚀 Features

- **Nested File/Folder Structure**: Hierarchical display of files and folders with unlimited nesting depth
- **Expand/Collapse Folders**: Click on folders to toggle their open/closed state (visual indicators: `>` closed, `<` open)
- **Add Files/Folders**: Interactive creation of new files and folders within any directory
- **Delete Functionality**: Remove files and folders from the structure
- **Dynamic ID Management**: Automatic path-based ID generation for unique identification
- **Recursive Operations**: All operations (add, delete, expand) work recursively through the entire tree structure

## 🎯 Key Functionality

### File Explorer Operations
- **Open/Close Folders**: Click on any folder name to expand or collapse its contents
- **Add New Items**: Use the "Add +" button on folders to create new files or folders
- **Delete Items**: Use the "Delete -" button to remove any file or folder
- **Interactive Prompts**: User-friendly prompts for entering file/folder names and types

### Visual Features
- **VS Code-like Interface**: Clean, intuitive design similar to VS Code's file explorer
- **Folder Icons**: Visual indicators (`>` and `<`) show folder state
- **Nested Indentation**: Clear visual hierarchy with proper indentation
- **Responsive Layout**: Works seamlessly across different screen sizes

## 🏗️ Project Structure

```
src/
├── components/
│   ├── FolderItem.jsx      # Individual file/folder component with actions
│   └── FolderTree.jsx      # Root tree container component
├── fileStructureData.js    # Sample data and ID generation utilities
├── App.js                  # Main application logic and state management
└── App.css                 # Styling for the application
```

## 🔧 Technical Implementation

### State Management
- **React Hooks**: Uses `useState` and `useEffect` for state management
- **Recursive Updates**: Implements recursive algorithms for adding/deleting items in nested structures
- **Immutable Updates**: Maintains state immutability for optimal React performance

### Data Structure
- **Hierarchical JSON**: Files and folders represented as nested objects with `children` arrays
- **Unique IDs**: Path-based identification system (e.g., `/src/components/Header.jsx`)
- **Type Distinction**: Clear separation between `file` and `folder` types

### Key Components

#### `FolderItem.jsx`
- Handles individual file/folder rendering
- Manages expand/collapse state
- Provides add/delete functionality
- Recursive rendering of children

#### `FolderTree.jsx`
- Root container for the file tree
- Maps over top-level items
- Passes down action handlers

#### `App.js`
- Central state management
- Recursive add/delete operations
- Data initialization and updates

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd file-folder-vs-code
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

### Usage

1. **Exploring Files**: Click on folder names to expand/collapse directories
2. **Adding Items**: 
   - Click "Add +" button on any folder
   - Enter the name when prompted
   - Enter the type ("file" or "folder") when prompted
3. **Deleting Items**: Click "Delete -" button on any file or folder to remove it

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder with optimized performance.

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App for full configuration control.

## 🎨 Customization

### Styling
- Modify `App.css` for visual customizations
- Update button styles and spacing in component files
- Customize folder icons and indentation

### Data Structure
- Edit `fileStructureData.js` to change the initial file structure
- Add new file types or properties as needed
- Modify the ID generation logic for different path structures

### Functionality
- Extend `FolderItem.jsx` for additional file operations (rename, copy, etc.)
- Add file content preview or editing capabilities
- Implement drag-and-drop functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔮 Future Enhancements

- Drag and drop file/folder reorganization
- File content preview and editing
- Search functionality within the file tree
- Context menu with additional operations
- File type icons and syntax highlighting
- Import/export functionality for file structures
