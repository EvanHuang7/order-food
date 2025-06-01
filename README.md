# 🌟 Oder Food

## 📚 <a name="table">Table of Contents</a>

1. 📋 [Introduction](#introduction)
2. 🛠️ [Tech Stack](#tech-stack)
3. 🚀 [Features](#features)
4. 📦 [Installation and Quick Start](#quick-start)
5. ⚙️ [Environment Variables](#environment-variables)
6. 🔍 [API Routes](#api-routes)
7. 🧩 [Diagram](#diagram)
8. 📸 [Screenshots](#screenshots)
9. 👨‍💼 [About the Author](#about-the-author)

## <a name="introduction">📋 Introduction</a>

🍔 Oder Food is a full-stack food delivery platform that connects customers, restaurants, and delivery drivers in a unified system.

- **👤 Customers** can browse local restaurants, place food orders, track deliveries in real-time, and even **talk to an AI assistant to place orders via voice calls**.
- **🍽️ Restaurants** can manage their menus, orders, and business operations directly through the platform.
- **🛵 Drivers** can accept delivery requests and earn money by delivering food to customers efficiently.

## <a name="tech-stack">🛠️ Tech Stack</a>

- **🤖 Backend**: Node.js, Express.js, TypeScript, Prisma, PostgreSQL
- **🖥️ Frontend**: Next.js, TypeScript, Redux Toolkit, Shadcn, Tailwind CSS
- **☁️ AWS**: EC2(host server), RDS(database storage), VPC(isolate virtual network), SNS(send notifications), SES(send emails), API Gateway(secure route requests), Cognito(user authentication), Amplify(host client), S3(store files)
- **🧩 Other**: VAPI AI(AI voice assistant), Google AI Gemeni(integrate Gemini APIs), PG(subscribe PostgreSQL event), PM2(auto restart project in cloud), Framer Motion(front-end animation), React hook Form and Zod(form and validation)

## <a name="features">🚀 Features</a>

👉 **Authentication**: Secure Sign Up and Sign In using email and password, handled by **AWS Cognito**.

👉 **Favorite & Filter Restaurants**: Customers can favorite restaurants and filter them by category or price range. Restaurant cards display useful info such as address, average price per person, rating, and review history — all powered by **Prisma SQL**.

👉 **Place Order**: Customers can either add menu items to a shopping cart and place an order manually, or use voice to order directly through a call with our **AI assistant**, powered by **Vapi AI and Google Gemini**.

👉 **Notification**: Customers can enable notifications to receive:

- Order delivery status updates via **AWS SES** email
- New menu alerts from favorited restaurants via **AWS SES** email
- Promotional emails via **AWS SNS**

👉 **Customer Dashboard**:

- **Orders Tab**: View order details, cancel pending orders, filter by status, and rate/comment after delivery
- **Favorites Tab**: Manage favorite restaurants and get notified about new items by emails
- **Payments Tab**: Add or update payment methods and view transaction history
- **Settings Tab**: Edit personal contact and address information

👉 **Restaurant Dashboard**:

- **Orders Tab**: View, filter, and manage order statuses
- **Earnings Tab**: View earnings from completed orders
- **Manage Restaurant Tab**: Add or update menu items
- **Settings Tab**: Edit restaurant profile, location, contact, categories, and hours etc

👉 **Driver Dashboard**:

- **Available Orders Tab**: View and accept available delivery jobs
- **My Orders Tab**: Track and update your delivery progress
- **Earnings Tab**: View total income from completed deliveries
- **Settings Tab**: Update driver contact and location info

👉 **Modern UI/UX**: Sleek, intuitive design optimized for usability and visual clarity.

👉 **Responsiveness**: Fully responsive layout that adapts seamlessly across all screen sizes and devices.

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
