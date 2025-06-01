# 🌟 Oder Food

## 📚 <a name="table">Table of Contents</a>

1. 📋 [Introduction](#introduction)
2. 🛠️ [Tech Stack](#tech-stack)
3. 🚀 [Features](#features)
4. 🧩 [Diagram and Screenshots](#diagram-screenshots)
5. ⚙️ [Installation and Start Project](#installation-start-project)
6. ☁️ [Deploy App in AWS Cloud](#deploy-app)
7. 📡 [API Routes](#api-routes)
8. 📌 [Note](#note)
9. 👨‍💼 [About the Author](#about-the-author)

## <a name="introduction">📋 Introduction</a>

🍔 Oder Food is a full-stack food delivery platform that connects customers, restaurants, and delivery drivers in a unified system.

- **👤 Customers** can browse local restaurants, place food orders, track deliveries in real-time, and even **talk to an AI assistant to place orders via voice calls**.
- **🍽️ Restaurants** can manage their menus, orders, and business operations directly through the platform.
- **🛵 Drivers** can accept delivery requests and earn money by delivering food to customers efficiently.

## <a name="tech-stack">🛠️ Tech Stack</a>

- **📡 Backend**: Node.js, Express.js, TypeScript, Prisma, PostgreSQL
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

👉 **Modern UI/UX**: Sleek, intuitive design optimized for usability and visual clarity

👉 **Responsiveness**: Fully responsive layout that adapts seamlessly across all screen sizes and devices

## <a name="diagram-screenshots">🧩 Diagram and 📸 Screenshots</a>

- **Database Tables Diagram**: [drawSQL Diagram Link](https://drawsql.app/teams/evans-projects/diagrams/order-food-app)
- **Screenshots**: [Miro Link](https://miro.com/app/board/uXjVI0aDhM0=/?share_link_id=91185319434)
  ![🖼️ Screenshots Preview](https://res.cloudinary.com/dapo3wc6o/image/upload/v1748763193/Order-Food-App-Screenshots_dtcjbx.jpg)

## <a name="installation-start-project">📦 Installation and ⚙️ Start Project</a>

Follow these steps to set up the project locally on your machine.

**⭐ Prerequisites**
Make sure you have the following installed on your machine:

- Git
- Node.js and npm(Node Package Manager)
- PostgresSQL and PgAdmin

**⭐ Cloning the Repository**

```bash
git clone https://github.com/EvanHuang7/order-food.git
```

**⭐ Installation**
Install the project dependencies using npm:

```bash
cd order-food/server
npm install
cd ..
cd client
npm install
```

**⭐ Create Database in PgAdmin**

Create a local PostgreSQL database using pgAdmin, and note down your PostgreSQL **username, password, and database name**—you'll need them later in the **Set Up Environment Variables step**. (Feel free to follow any PostgreSQL setup tutorial on YouTube to complete this step.)

**⭐ Set Up AWS**

Create an AWS account and ensure you qualify for the 12-month Free Tier if you're a new user. Otherwise, you may incur charges when using AWS services. Each AWS service has its own Free Tier policy—refer to the [AWS Free Tier page](https://aws.amazon.com/free) for details. (You can follow relevant AWS setup tutorials on YouTube to guide you through the steps below.)

- **Set up AWS Cognito and create a User Pool**:
  - Choose **"Single-page application"** as the application type
  - Enter your desired **application name**
  - Under **Sign-in identifiers**, select both **"Email"** and **"Username"**
  - Under **Required attributes for sign-up**, choose **"email"**
  - After creating the user pool, go to the **Authentication > Sign-up** tab and add a custom attribute named "role"
- Create and configure an **AWS S3 Bucket** with the appropriate access permissions and policies
- Create an **AWS IAM user** with **full access to S3, SES, and SNS**:
  - Generate and securely store the **Access Key ID and Secret Access Key**
- **Set up AWS SES (Simple Email Service)**:
  - Verify both your **sender email and recipient email** addresses
  - (In **sandbox mode**, SES requires the recipient email to be verified in the **Identities section**)
- **Set up an AWS SNS (Simple Notification Service) topic** for managing email or app notifications

**⭐ Set Up Environment Variables**

Create a `.env` file under **client** folder of your project and add the following content:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001

NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID=
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID=

NEXT_PUBLIC_VAPI_WEB_TOKEN=
```

Create another `.env` file under **server** folder of your project and add the following content:

```env
PORT=3001
DATABASE_URL="postgresql://myusername:mypassword@localhost:5432/mydatabasename?schema=public"

AWS_REGION=""
S3_BUCKET_NAME=""

AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
SES_VERIFIED_EMAIL=""

SNS_TOPIC_SUBSCRIBE_APP=""

GOOGLE_GENERATIVE_AI_API_KEY=""
```

- Replace the placeholder values with your actual credentials from AWS Cognito, Vapi, PostgreSQL, AWS S3, IAM User, SES, SNS, and Google Gemini (via Google AI Studio).
- Feel free to follow YouTube tutorials on Vapi and Google AI Studio to obtain the required tokens and configuration.

**⭐ Create Tables, Add Event Trigger, and Seed Mock Data**

Create the necessary tables, add an event trigger for the `create` event on the `Notification` table, and seed mock data into your local PostgreSQL database by running:

```bash
cd order-food/server
npx prisma migrate reset
npm run prisma:generate
npm run seed
```

**⭐ Upload Images of Mock Data to AWS S3 Bucket**

Upload the entire `mockDataImage` folder located in `order-food/client/public` to your AWS S3 bucket. This ensures that mock data images are properly displayed in the application.

**⭐ Running the Project**

Open **two separate terminal windows** and run the following commands to start the frontend and backend servers:

**Terminal 1** – Start the Client (Next.js App):

```bash
cd order-food/client
npm run dev
```

**Terminal 2** – Start the Server (Express API):

```bash
cd order-food/server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="deploy-app">☁️ Deploy App in AWS Cloud</a>

## <a name="api-routes">📡 API Routes</a>

## <a name="note">📌 Note</a>

Follow these steps to sync your Prisma schema changes with the PostgreSQL database whenever the schema is updated:

- Manually delete the existing `migration.sql` file located at `order-food/server/prisma/migrations/20250525010753_init`.
- Run `npx prisma migrate dev --name init` to generate a new SQL migration file and apply it to your current database.
- Manually append the trigger creation SQL script at the end of the newly generated migration file.

  ```
  -- 1. Create the trigger function
  CREATE OR REPLACE FUNCTION notify_new_notification()
  RETURNS TRIGGER AS $$
  BEGIN
  PERFORM pg_notify('new_notification_channel', row_to_json(NEW)::text);
  RETURN NEW;
  END;
  $$ LANGUAGE plpgsql;

  -- 2. Create the trigger
  CREATE TRIGGER on_new_notification
  AFTER INSERT ON "Notification"
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_notification();
  ```

- Run `npx prisma migrate reset` to drop and recreate the database, ensuring the trigger is applied.
- Run `npm run prisma:generate` to regenerate the Prisma client and sync the updated Prisma types with the front-end client.

## <a name="about-the-author">👨‍💼 About the Author</a>

Hi! I'm Evan Huang — a full-stack software developer with 4+ years of experience in web applications, real-time systems, and cloud integration. I’m passionate about building scalable products with clean architecture, elegant UI/UX, and modern technologies like React, Node.js, PostgreSQL, and AWS.

This food delivery app project was completed on **June 2, 2025**, and reflects my focus on blending AI, cloud infrastructure, and responsive design into real-world solutions.

Feel free to connect or contribute!

🔗 [LinkedIn](https://www.linkedin.com/in/evan-huang-97336b1a9/)  
💻 [GitHub](https://github.com/EvanHuang7)
