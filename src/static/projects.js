export const project = {
  "projects": [
    {
      "id": "project-001",
      "title": "E-Commerce Dashboard",
      "description": "A comprehensive admin dashboard for e-commerce management with real-time analytics, inventory management, and sales tracking. Built with modern React architecture and integrated with multiple APIs for seamless data flow.",
      "shortDescription": "Admin dashboard for e-commerce with real-time analytics",
      "features": [
        "Real-time sales analytics and reporting",
        "Inventory management with low stock alerts",
        "Customer management and order tracking",
        "Multi-role authentication system",
        "Interactive charts and data visualization",
        "Responsive design for all devices",
        "Export functionality for reports",
        "Dark/Light theme toggle"
      ],
      "techStack": {
        "frontend": ["React.js", "TypeScript", "Tailwind CSS", "Chart.js", "Redux Toolkit"],
        "backend": ["Node.js", "Express.js", "MongoDB", "JWT"],
        "deployment": ["Vercel", "Railway", "Cloudinary"],
        "tools": ["Git", "VS Code", "Postman", "Figma"]
      },
      "links": {
        "live": "https://ecommerce-dashboard-demo.vercel.app",
        "github": "https://github.com/username/ecommerce-dashboard",
        "documentation": "https://github.com/username/ecommerce-dashboard/wiki"
      },
      "images": {
        "thumbnail": "/images/projects/ecommerce-dashboard-thumb.jpg",
        "screenshots": [
          "/images/projects/ecommerce-dashboard-1.jpg",
          "/images/projects/ecommerce-dashboard-2.jpg",
          "/images/projects/ecommerce-dashboard-3.jpg"
        ]
      },
      "status": "completed",
      "category": "Full Stack",
      "duration": "2 months",
      "teamSize": 1,
      "challenges": [
        "Implementing real-time data synchronization",
        "Optimizing performance with large datasets",
        "Creating responsive charts for mobile devices"
      ],
      "learnings": [
        "Advanced React patterns and hooks",
        "Database optimization techniques",
        "Real-time data handling with WebSockets"
      ],
      "tags": ["React", "Dashboard", "E-commerce", "Analytics", "Full Stack"],
      "featured": true,
      "completionDate": "2024-12-15",
      "createdAt": "2024-10-01",
      "updatedAt": "2024-12-15"
    },
    {
      "id": "project-002",
      "title": "Social Media Mobile App",
      "description": "A feature-rich social media application built with React Native, offering seamless user experience across iOS and Android platforms. Includes real-time messaging, post sharing, and advanced user interaction features.",
      "shortDescription": "Cross-platform social media app with real-time features",
      "features": [
        "User authentication and profile management",
        "Real-time messaging and notifications",
        "Photo and video sharing with filters",
        "Like, comment, and share functionality",
        "Story feature with 24-hour expiry",
        "Following/followers system",
        "Search and discovery features",
        "Offline mode support"
      ],
      "techStack": {
        "frontend": ["React Native", "TypeScript", "React Navigation", "Async Storage"],
        "backend": ["Firebase", "Node.js", "Socket.io"],
        "deployment": ["Google Play Store", "Apple App Store", "Firebase Hosting"],
        "tools": ["Expo", "Android Studio", "Xcode", "Firebase Console"]
      },
      "links": {
        "live": "https://play.google.com/store/apps/details?id=com.socialmedia.app",
        "github": "https://github.com/username/social-media-app",
        "documentation": "https://github.com/username/social-media-app/blob/main/README.md"
      },
      "images": {
        "thumbnail": "/images/projects/social-app-thumb.jpg",
        "screenshots": [
          "/images/projects/social-app-1.jpg",
          "/images/projects/social-app-2.jpg",
          "/images/projects/social-app-3.jpg",
          "/images/projects/social-app-4.jpg"
        ]
      },
      "status": "completed",
      "category": "Mobile App",
      "duration": "3 months",
      "teamSize": 2,
      "challenges": [
        "Implementing real-time messaging efficiently",
        "Optimizing image/video upload and storage",
        "Ensuring smooth performance across devices"
      ],
      "learnings": [
        "React Native development best practices",
        "Firebase integration and real-time databases",
        "Mobile app deployment and store optimization"
      ],
      "tags": ["React Native", "Mobile", "Social Media", "Firebase", "Real-time"],
      "featured": true,
      "completionDate": "2024-11-30",
      "createdAt": "2024-09-01",
      "updatedAt": "2024-11-30"
    },
    {
      "id": "project-003",
      "title": "AI-Powered Task Manager",
      "description": "An intelligent task management system that uses machine learning to predict task completion times, suggest optimal scheduling, and provide productivity insights. Built with modern web technologies and integrated with AI APIs.",
      "shortDescription": "Smart task manager with AI-powered scheduling and insights",
      "features": [
        "AI-powered task prioritization",
        "Smart scheduling suggestions",
        "Productivity analytics and insights",
        "Team collaboration features",
        "Calendar integration",
        "Voice command support",
        "Automated report generation",
        "Custom notification system"
      ],
      "techStack": {
        "frontend": ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        "backend": ["Python", "FastAPI", "PostgreSQL", "Redis"],
        "ai": ["OpenAI API", "TensorFlow", "Scikit-learn"],
        "deployment": ["Vercel", "Railway", "AWS S3"],
        "tools": ["Docker", "GitHub Actions", "Jupyter Notebook"]
      },
      "links": {
        "live": "https://ai-task-manager.vercel.app",
        "github": "https://github.com/username/ai-task-manager",
        "documentation": "https://ai-task-manager.vercel.app/docs"
      },
      "images": {
        "thumbnail": "/images/projects/ai-task-manager-thumb.jpg",
        "screenshots": [
          "/images/projects/ai-task-manager-1.jpg",
          "/images/projects/ai-task-manager-2.jpg",
          "/images/projects/ai-task-manager-3.jpg"
        ]
      },
      "status": "in-progress",
      "category": "AI/ML",
      "duration": "4 months",
      "teamSize": 3,
      "challenges": [
        "Training accurate prediction models",
        "Integrating multiple AI APIs efficiently",
        "Handling real-time data processing"
      ],
      "learnings": [
        "Machine learning model implementation",
        "API integration and optimization",
        "Advanced Next.js features and deployment"
      ],
      "tags": ["AI", "Machine Learning", "Next.js", "Task Management", "Productivity"],
      "featured": true,
      "completionDate": null,
      "createdAt": "2024-11-01",
      "updatedAt": "2025-01-15"
    },
    {
      "id": "project-004",
      "title": "Blockchain Voting System",
      "description": "A secure and transparent voting system built on blockchain technology ensuring tamper-proof elections with real-time result tracking and voter verification.",
      "shortDescription": "Secure blockchain-based voting platform",
      "features": [
        "Blockchain-based vote recording",
        "Smart contract integration",
        "Voter identity verification",
        "Real-time result tracking",
        "Transparent audit trail",
        "Multi-language support",
        "Mobile-responsive interface",
        "Admin dashboard for election management"
      ],
      "techStack": {
        "frontend": ["React.js", "Web3.js", "Material-UI", "Chart.js"],
        "blockchain": ["Solidity", "Ethereum", "Truffle", "Ganache"],
        "backend": ["Node.js", "Express.js", "IPFS"],
        "deployment": ["Netlify", "Infura", "MetaMask"],
        "tools": ["Remix IDE", "Truffle Suite", "Web3 Provider"]
      },
      "links": {
        "live": "https://blockchain-voting-demo.netlify.app",
        "github": "https://github.com/username/blockchain-voting",
        "documentation": "https://github.com/username/blockchain-voting/tree/main/docs"
      },
      "images": {
        "thumbnail": "/images/projects/blockchain-voting-thumb.jpg",
        "screenshots": [
          "/images/projects/blockchain-voting-1.jpg",
          "/images/projects/blockchain-voting-2.jpg"
        ]
      },
      "status": "completed",
      "category": "Blockchain",
      "duration": "2.5 months",
      "teamSize": 1,
      "challenges": [
        "Implementing secure smart contracts",
        "Ensuring scalability on blockchain",
        "Creating user-friendly Web3 interface"
      ],
      "learnings": [
        "Blockchain development fundamentals",
        "Smart contract security best practices",
        "Web3 integration with frontend applications"
      ],
      "tags": ["Blockchain", "Solidity", "Web3", "Voting", "Security"],
      "featured": false,
      "completionDate": "2024-10-20",
      "createdAt": "2024-08-01",
      "updatedAt": "2024-10-20"
    }
  ],
  "projectCategories": [
    "Full Stack",
    "Mobile App",
    "AI/ML",
    "Blockchain",
    "Frontend",
    "Backend",
    "Data Science"
  ],
  "techStacks": {
    "frontend": ["React.js", "Next.js", "Vue.js", "Angular", "React Native", "Flutter"],
    "backend": ["Node.js", "Python", "Java", "PHP", "Ruby", "Go"],
    "databases": ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
    "cloud": ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify"],
    "tools": ["Git", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"]
  },
  "metadata": {
    "totalProjects": 4,
    "featuredProjects": 3,
    "lastUpdated": "2025-01-15",
    "version": "1.0.0"
  }
}