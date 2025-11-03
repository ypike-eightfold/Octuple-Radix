# Octuple Radix

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://ypike-eightfold.github.io/Octuple-Radix/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](#)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?logo=radix-ui&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](#)

> A modern, accessible design system built on Radix Themes, providing a comprehensive collection of React components with enhanced features and Octuple design language integration.

## 🚀 Live Storybook

**[📖 View Complete Component Library →](https://ypike-eightfold.github.io/Octuple-Radix/)**

### Featured Components:
- **[Enhanced Table](https://ypike-eightfold.github.io/Octuple-Radix/?path=/docs/components-enhancedtable--docs)** - Advanced data table with sorting, filtering, pagination, and selection
- **[Accordion](https://ypike-eightfold.github.io/Octuple-Radix/?path=/docs/components-accordion--docs)** - Collapsible content panels with badges and actions
- **[Timeline](https://ypike-eightfold.github.io/Octuple-Radix/?path=/docs/components-timeline--docs)** - Vertical and horizontal timeline components
- **[Stepper](https://ypike-eightfold.github.io/Octuple-Radix/?path=/docs/components-stepper--docs)** - Multi-step workflow indicators
- **[Uploader](https://ypike-eightfold.github.io/Octuple-Radix/?path=/docs/components-uploader--docs)** - File upload with drag-and-drop support

## ✨ Features

- **🎨 Modern Design System**: Built on Radix Themes with Octuple design language
- **♿ Accessibility First**: WCAG 2.2 AA compliant components
- **🧩 Enhanced Components**: Extended Radix components with additional features
- **📊 Advanced Data Table**: Comprehensive table with sorting, filtering, and pagination
- **🔧 TypeScript Support**: Full type safety and IntelliSense
- **📱 Responsive Design**: Mobile-first, fully responsive components
- **🎭 Storybook Integration**: Interactive component playground and documentation
- **⚡ Performance Optimized**: Tree-shakable, minimal bundle size

## 🏗️ Architecture

This design system extends [Radix Themes](https://www.radix-ui.com/themes) with:

- **Enhanced Components**: Additional props and functionality while maintaining Radix architecture
- **Custom Components**: Purpose-built components like Enhanced Table, Timeline, and Stepper
- **Octuple Integration**: Consistent design tokens and styling from the Octuple design system
- **Accessibility Compliance**: WCAG 2.2 AA standards with proper ARIA implementations

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ypike-eightfold/Octuple-Radix.git
cd Octuple-Radix/octuple-radix-themes

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Development

### Available Scripts

```bash
# Start Storybook development server (localhost:6007)
npm run dev

# Build Storybook for production
npm run build-storybook

# Build component library
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### Project Structure

```
octuple-radix-themes/
├── src/
│   ├── components/          # Component implementations
│   │   ├── Accordion/       # Enhanced Accordion component
│   │   ├── EnhancedTable/   # Advanced data table
│   │   ├── Timeline/        # Timeline components
│   │   └── ...
│   ├── stories/             # Storybook stories
│   ├── styles/              # Global styles and overrides
│   └── index.ts             # Main exports
├── .storybook/              # Storybook configuration
└── public/                  # Static assets
```

## 🧩 Component Highlights

### Enhanced Table
Advanced data table with enterprise-grade features:
- **Sorting**: Multi-column sorting with visual indicators
- **Selection**: Row selection with checkbox/radio modes
- **Pagination**: Integrated pagination controls
- **Search**: Global and column-specific filtering
- **Loading States**: Skeleton loaders and empty states
- **Visual Variants**: Striped rows, hover effects, borders
- **Expandable Rows**: Collapsible row details

### Accordion
Enhanced collapsible panels:
- **Content Styling**: White background with rounded corners
- **Badges**: Optional number badges and status indicators  
- **Actions**: Up to two action buttons per panel
- **Descriptions**: Additional descriptive text
- **Accessibility**: WCAG 2.2 compliant with proper keyboard navigation

### Timeline
Flexible timeline component:
- **Orientations**: Vertical and horizontal layouts
- **Customizable**: Custom icons, colors, and content
- **Responsive**: Adapts to different screen sizes
- **Accessibility**: Screen reader friendly

## 🎨 Design Tokens

The design system uses Radix Themes' built-in design tokens:

- **Colors**: Semantic color scales (gray, blue, red, green, etc.)
- **Typography**: Consistent text sizing and spacing
- **Spacing**: Standardized spacing scale
- **Radii**: Border radius tokens for consistent rounding
- **Shadows**: Elevation and depth tokens

## ♿ Accessibility

All components are built with accessibility as a first-class citizen:

- **WCAG 2.2 AA Compliance**: Meets or exceeds accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **Focus Management**: Logical focus order and visible focus indicators
- **Color Contrast**: Minimum 4.5:1 contrast ratios for text
- **Responsive**: Works across all device sizes and orientations

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Component Development

When creating new components:

1. Follow Radix architecture patterns
2. Ensure WCAG 2.2 AA compliance
3. Add comprehensive Storybook stories
4. Include TypeScript definitions
5. Write unit tests
6. Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Radix UI](https://www.radix-ui.com/)** - Foundation for accessible React components
- **[Radix Themes](https://www.radix-ui.com/themes)** - Design system and styling framework
- **[Storybook](https://storybook.js.org/)** - Component development and documentation
- **[Octuple](https://eightfoldai.github.io/octuple/)** - Design language and component inspiration

---

**[🔗 Live Documentation](https://ypike-eightfold.github.io/Octuple-Radix/)** | **[📊 Enhanced Table Demo](https://ypike-eightfold.github.io/Octuple-Radix/?path=/story/components-enhancedtable--playground)** | **[🎨 Component Overview](https://ypike-eightfold.github.io/Octuple-Radix/?path=/docs/documentation-components-overview--docs)**
