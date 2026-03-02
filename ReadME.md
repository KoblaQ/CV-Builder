# CV Builder

## Description

CV Builder is a SaaS MVP for dynamic CV tailoring based on job descriptions. It enables users to create, edit, and export CVs that match specific job requirements. The platform will support multi-user authentication, browser-based rendering, and PDF export.

## Desired Features

- User authentication and account management
- Dynamic CV editing and preview
- Tailoring CVs to job descriptions
- PDF export of CVs
- Categorized skills, projects, education, and work experience sections
- Multi-user support

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Axios
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB (Mongoose)
- **Other:** Zod (validation), bcrypt (password hashing), dotenv (env management), Swagger (API docs)

## Architecture Overview

- **Client-server architecture**
- **REST API** backend
- Frontend and backend are separate projects (`cv-builder-client` and `cv-builder-server`)
- MongoDB for data storage (users, CVs, skills, etc.)

## Setup Instructions

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KoblaQ/CV-Builder.git
   cd cv-builder
   ```

2. **Install dependencies:**

   ```bash
   cd cv-builder-client
   npm install
   cd ../cv-builder-server
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` in `cv-builder-server` and fill in required values (e.g., MongoDB URI, USER_SALT_ROUNDS, PORT).

4. **Run the development servers:**
   - **Frontend:**
     ```bash
     cd cv-builder-client
     npm run dev
     ```
   - **Backend:**
     ```bash
     cd cv-builder-server
     npm run dev
     ```

5. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:3000](http://localhost:3000)
