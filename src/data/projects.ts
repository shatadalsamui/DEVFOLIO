// src/data/projects.ts
// Add your project info, video, and GitHub link here

export interface Project {
    id: string;
    title: string;
    description: string; // Short description shown in grid and at top of detail page
    fullDescription: string; // Full detailed description shown below the video
    videoUrl: string; // YouTube embed URL (e.g., "https://www.youtube.com/embed/VIDEO_ID")
    githubUrl: string;
}

export const projects: Project[] = [
    {
        id: "Walpay",
        title: "WALPAY",
        description: "WalPay is a scalable, secure digital wallet platform built as a Turborepo monorepo. Supporting 50,000+ users and 10,000+ daily sessions, it delivers real-time P2P payments, robust compliance, and seamless user experience for modern businesses.",
        fullDescription: `WalPay is an enterprise-grade digital wallet platform engineered for secure, high-volume financial transactions. Built with modern technologies including React.js, TypeScript, Node.js, Express, Next.js, PostgreSQL, Prisma, AWS, and Docker, the platform demonstrates production-ready architecture and best practices.

# KEY ACHIEVEMENTS

• Successfully deployed platform supporting 50,000+ active users with 10,000+ daily sessions
• Architected Turborepo monorepo reducing build times by 50% and streamlining codebase management
• Developed responsive UI with 20+ reusable React components, achieving 25% faster load times
• Designed robust Node.js backend services maintaining 99.9% uptime
• Optimized database operations handling 1,000+ queries per minute with PostgreSQL and Prisma ORM
• Enforced code quality standards with ESLint/Prettier, accelerating compilation and deployment by 30%

# ARCHITECTURE & PROJECT STRUCTURE

Monorepo organized with Turborepo for optimal scalability:

**APPS/**
  • user-app: Next.js customer application with authentication, dashboard, and API routes
  • landing-page: Marketing website for user acquisition
  • bank-webhook: Dedicated service for secure bank integrations

**PACKAGES/**
  • db: Prisma schemas, models, and database migrations
  • ui: Shared React component library
  • store: Centralized state management
  • eslint-config & typescript-config: Unified code standards

# BACKEND ARCHITECTURE & SECURITY

The backend is engineered with financial-grade security and reliability:

**WEBHOOK INTEGRATION SYSTEM**

• Dedicated Express.js server processes bank webhooks with secret verification (x-webhook-secret header)
• Deposit webhooks update user balance and transaction status atomically after bank confirmation
• Withdrawal webhooks manage status transitions (COMPLETED/FAILED) with locked balance handling
• Duplicate transaction prevention ensures data integrity

**ATOMIC TRANSACTIONS & CONCURRENCY CONTROL**

• All multi-step operations use prisma.$transaction() for ACID compliance
• Row-level locking (FOR UPDATE) prevents race conditions during P2P transfers and withdrawals
• Sender and receiver balances updated atomically to maintain consistency
• Balance locking mechanism protects funds during pending withdrawals

**COMPLIANCE & VALIDATION**

• Balance capping enforces ₹1,00,000 maximum wallet limit per user for regulatory compliance
• Comprehensive Zod schema validation for all API inputs and client data
• Input validation covers length, format, value constraints, and malicious data defense

**AUTHENTICATION & SESSION MANAGEMENT**

• NextAuth.js powers secure authentication with CredentialsProvider
• Multiple auth flows: email/password and OTP verification
• JWT/session callbacks with type-safe user data propagation
• Strong password policy enforcement

# CORE FEATURES

• Seamless deposit and withdrawal operations with real-time bank integration
• Instant P2P transfers between users with transaction history tracking
• Comprehensive balance management with transaction categorization
• Multi-factor authentication (phone/email + password, OTP verification)
• Real-time webhook notifications for transaction status updates
• Robust error handling and user feedback for all financial operations

# TECHNICAL HIGHLIGHTS

• CI/CD pipeline with GitHub Actions for automated testing and deployment
• Docker containerization for consistent development and production environments
• Modular architecture enabling independent scaling of services
• Type-safe development across the entire stack with TypeScript
• Performance optimization through efficient query patterns and caching strategies

Built with scalability, security, and user experience at the forefront, WalPay demonstrates production-ready fintech architecture suitable for modern digital payment platforms.`,
        videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // Replace YOUR_VIDEO_ID with actual YouTube video ID
        githubUrl: "https://github.com/shatadalsamui/WALPAY",
    },
    {
        id: "project2",
        title: "Project 2 Title",
        description: "Short description for Project 2.",
        fullDescription: "Add your full project description here. You can write multiple paragraphs and include all the details about your project, technologies used, features, and your contributions.",
        videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // Replace YOUR_VIDEO_ID with actual YouTube video ID
        githubUrl: "",
    },
];
