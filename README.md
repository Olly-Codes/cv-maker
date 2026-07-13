# CV Maker
A small react application that let's users fill in thier general, educational and work experience details and generates a readable CV preview.
<br>
Live Preview: offline

## Overview
CV Maker allows users to input their general information, educational experience and pracitcal experience into a form. On submission, the data is rendered as a formatted CV preview, which can be edited again at any point to update any missing details.

## Form
<img width="1920" height="1696" alt="cv-maker-form" src="https://github.com/user-attachments/assets/7cca0874-15ca-4cd9-8f69-6fe33f67e201" />
<br>

## Preview
<img width="1920" height="962" alt="cv-maker-preview" src="https://github.com/user-attachments/assets/ca5734fa-3c96-4368-8924-d1b3877eb028" />
<br>

## Features
- A single form that covers general information, educational experience, practical experience and duration of employment
- The ability to toggle between an editable from view and a read-only CV preview
- Automatic trimming and splitting of comma-separated responsibilities into a llist
- Formatted date display in the preview using `date-fns`

## Tech Stack
- React
- Vite

## Getting Started
### Prerequisites
- Node.js

### Installation
1. Clone the repo
```bash
git clone https://github.com/Olly-Codes/cv-maker.git
cd cv-maker
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

## What I learned
- Lifting state up so a single source of truth in a parent component is responsible for multiple child views
- Passing handler functions down as propts to update state from nested form fields
