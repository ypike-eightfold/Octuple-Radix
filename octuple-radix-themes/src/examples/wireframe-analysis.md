# Wireframe Analysis: Component Mapping

## Page 1: Jobs Dashboard

### UI Elements Analysis:
- **Left Sidebar**: Navigation menu with Home, Jobs, Candidates, Calendar, Reports, Settings
- **Main Content**: Header with "Jobs" title and "Create new job" button  
- **Metrics Cards**: Open Positions (10), Active Job Posts (7), Pending Approval (2), Expired Posts (1)
- **Filter Tabs**: All, Open, Pending Approval, Expired
- **Job Cards**: Software Engineer, Marketing Manager, HR Coordinator, Product Designer, Sales Executive

### Component Mapping:

#### **Radix Version Components:**
- `NavigationMenu` - Left sidebar navigation
- `Button` - Create new job, Edit, View job post, View Candidates buttons
- `Card` - Job listing cards and metrics cards  
- `Badge` - Status indicators, metrics numbers
- `Tabs` - Filter tabs (All, Open, Pending Approval, Expired)
- `Flex`, `Box`, `Grid` - Layout containers
- `Text`, `Heading` - Typography

#### **V2.5 Version Components:**
- `NavigationMenu` - Left sidebar navigation (enhanced)
- `ButtonV2` - All action buttons with variants (primary, secondary, etc.)
- `Card` - Job listing cards and metrics cards
- `Badge` - Status indicators, metrics numbers  
- `Tabs` - Filter tabs
- `Flex`, `Box`, `Grid` - Layout containers
- `Text`, `Heading` - Typography

## Page 2: Candidate Details

### UI Elements Analysis:
- **Header**: Candidate name, contact info, status pipeline
- **Action Buttons**: Move to Offer dropdown, Edit, View job post
- **Progress Stages**: Applied → Underreview → Interview → Offer → Hire
- **Content Sections**: Working experience, Cover letter, Resume download
- **Evaluation Panel**: Overall Rating (4.0), Technical Skills, Problem-Solving, etc.
- **Comments Section**: Timestamped comments with user avatars and message input

### Component Mapping:

#### **Radix Version Components:**
- `Avatar` - User profile pictures
- `Button` - Action buttons, download button
- `Select` - Move to Offer dropdown
- `Progress` - Pipeline stages, skill ratings
- `TextArea` - Comment input field
- `Card` - Content sections
- `Badge` - Status indicators
- `Separator` - Section dividers
- `ScrollArea` - Comments list

#### **V2.5 Version Components:**
- `Avatar` - User profile pictures  
- `ButtonV2` - All action buttons with proper variants
- `SelectV2` - Move to Offer dropdown with custom shapes
- `Progress` - Pipeline stages, skill ratings
- `TextAreaV2` - Comment input with enhanced styling
- `Card` - Content sections
- `Badge` - Status indicators
- `Separator` - Section dividers  
- `ScrollArea` - Comments list

## Page 3: Pipeline Progress Report

### UI Elements Analysis:
- **Header**: "Pipeline Progress Report" with Product Designer filter
- **Action Buttons**: Filter, Export
- **Funnel Chart**: Candidate Pipeline Funnel (Applied: 350, Under Review: 300, etc.)
- **Trend Chart**: Daily Application Trends over 7 days
- **Data Table**: Candidate Pipeline Details with sortable columns
- **Pagination**: Table navigation at bottom

### Component Mapping:

#### **Radix Version Components:**
- `Select` - Product Designer filter dropdown
- `Button` - Filter, Export, pagination buttons
- `Table` - Candidate pipeline details table
- `Card` - Chart containers
- `Text`, `Heading` - Chart labels and data
- Custom Chart Components - Data visualizations

#### **V2.5 Version Components:**
- `SelectV2` - Product Designer filter with enhanced styling
- `ButtonV2` - Filter, Export, pagination buttons with variants
- `EnhancedTable` - Advanced data table with sorting, pagination
- `Card` - Chart containers  
- `Text`, `Heading` - Chart labels and data
- Custom Chart Components - Data visualizations

## Key Differences Between Versions:

### **V2.5 Advantages:**
1. **ButtonV2**: More variant options (8 variants vs standard Button)
2. **SelectV2**: Custom shapes (rounded, pill, inline), multi-select, error states
3. **TextAreaV2 & TextFieldV2**: Enhanced styling, error states, shapes
4. **EnhancedTable**: Advanced features like sorting, selection, pagination built-in
5. **Consistent Design Language**: Material Icons, unified sizing system

### **Octuple Radix Advantages:**
1. **Smaller Bundle**: Fewer custom components
2. **Radix Ecosystem**: Full compatibility with Radix primitives
3. **Proven Stability**: Battle-tested components

## Implementation Strategy:
1. Build both versions side-by-side for direct comparison
2. Use identical data and functionality
3. Showcase V2.5 enhancements while maintaining Radix baseline
4. Create interactive Storybook pages for testing both approaches
