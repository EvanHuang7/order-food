# 💻 Oder Food

## 📋 <a name="table">Table of Contents</a>

1. 🎬 [Introduction](#introduction)
2. 🛠️ [Tech Stack](#tech-stack)
3. 🚀 [Features](#features)
4. 📦 [Installation and Quick Start](#quick-start)
5. ⚙️ [Environment Variables](#environment-variables)
6. 🔍 [API Routes](#api-routes)
7. 🧩 [Diagram](#diagram)
8. 📸 [Screenshots](#screenshots)
9. 👨‍💼 [About the Author](#about-the-author)

## <a name="introduction">🎬 Introduction</a>

Oder Food is a full-stack food delivery app where users can browse restaurants, place orders, and track deliveries in real-time.

## <a name="tech-stack">🛠️ Tech Stack</a>

- **Backend**: Node.js, Express, Prisma, PostgreSQL
- **Frontend**: Next.js, Shadcn, Tailwind CSS, Redux Toolkit
- **AWS**: EC2(host server), RDS(host database), VPC(isolate virtual network), SNS(send notifications), SES(send emails), API Gateway(route requests to EC2 server), Cognito(user authentication), Amplify(host client), S3(store files)
- **Other**: VAPI(AI voice assistant), Vercel AI SDK (integrate Gemini API), PM2(auto restart project), PG(subscribe PostgreSQL event)

## <a name="features">🚀 Features</a>

👉 **Authentication**: Sign Up and Sign In using password/email authentication handled by AWS Cognito.

👉 **Place Order**:

👉 **Dashboard**: Manage

👉 **Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.

👉 **Responsiveness**: Fully responsive design that works seamlessly across devices.

## <a name="quick-start">📦 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/ai_mock_interviews.git
cd ai_mock_interviews
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Replace the placeholder values with your actual **[Firebase](https://firebase.google.com/)**, **[Vapi](https://vapi.ai/?utm_source=youtube&utm_medium=video&utm_campaign=jsmastery_recruitingpractice&utm_content=paid_partner&utm_term=recruitingpractice)** credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
