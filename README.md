# 🌟 Oder Food 🌟

## 📚 <a name="table">Table of Contents</a>

1. 📋 [Introduction](#introduction)
2. 🛠️ [Tech Stack](#tech-stack)
3. 🚀 [Features](#features)
4. 🧩 [Diagram and Screenshots](#diagram-screenshots)
5. ⚙️ [Installation and Start Project](#installation-start-project)
6. ☁️ [Deploy App in AWS Cloud](#deploy-app)
7. 📌 [Note for Schemas Update](#note-schemas-update)
8. 👨‍💼 [About the Author](#about-the-author)

## <a name="introduction">📋 Introduction</a>

🍔 Oder Food is a full-stack food delivery platform that connects customers, restaurants, and delivery drivers in a unified system.

- **👤 Customers** can browse local restaurants, place food orders, track deliveries in real-time, and even **talk to an AI assistant to place orders via voice calls**.
- **🍽️ Restaurants** can manage their menus, orders, and business operations directly through the platform.
- **🛵 Drivers** can accept delivery requests and earn money by delivering food to customers efficiently.

## <a name="tech-stack">🛠️ Tech Stack</a>

- **📡 Backend**:
  - Node.js, Express.js, TypeScript,
  - Prisma ORM, PostgreSQL
- **🖥️ Frontend**:
  - Next.js, TypeScript,
  - Redux Toolkit for state management
  - Shadcn & Tailwind CSS for UI
  - Framer Motion for animations
  - React Hook Form + Zod for forms and validation
- **☁️ AWS**:
  - **Authentication**: Cognito
  - **Hosting & Infrastructure**: EC2 (server), RDS (PostgreSQL DB), VPC (network isolation)
  - **Routing & Deployment**: API Gateway, Amplify (client hosting), S3 (file storage)
  - **Notifications & Email**: SNS (notifications), SES (emails)
- **🤖 AI & Other Tools**:
  - VAPI AI (voice assistant)
  - Google Gemini API (AI interaction)
  - PG (PostgreSQL event subscription)
  - PM2 (cloud deployment with auto-restart)

## <a name="features">🚀 Features</a>

**👉 Authentication**: Secure Sign Up and Sign In using email and password, handled by **AWS Cognito**.

**👉 Favorite & Filter Restaurants**: Customers can favorite restaurants and filter them by category or price range. Restaurant cards display useful info such as address, average price per person, rating, and review history — all powered by **Prisma SQL**.

**👉 Place Order**: Customers can either add menu items to a shopping cart and place an order manually, or use voice to order directly through a call with our **AI assistant**, powered by **Vapi AI and Google Gemini**.

**👉 Notification**: Customers can enable notifications to receive:

- Order delivery status updates via **AWS SES** email
- New menu alerts from favorited restaurants via **AWS SES** email
- Promotional emails via **AWS SNS**

**👉 Customer Dashboard**:

- **Orders Tab**: View order details, cancel pending orders, filter by status, and rate/comment after delivery
- **Favorites Tab**: Manage favorite restaurants and get notified about new items by emails
- **Payments Tab**: Add or update payment methods and view transaction history
- **Settings Tab**: Edit personal contact and address information

**👉 Restaurant Dashboard**:

- **Orders Tab**: View, filter, and manage order statuses
- **Earnings Tab**: View earnings from completed orders
- **Manage Restaurant Tab**: Add or update menu items
- **Settings Tab**: Edit restaurant profile, location, contact, categories, and hours etc

**👉 Driver Dashboard**:

- **Available Orders Tab**: View and accept available delivery jobs
- **My Orders Tab**: Track and update your delivery progress
- **Earnings Tab**: View total income from completed deliveries
- **Settings Tab**: Update driver contact and location info

**👉 Modern UI/UX**: Sleek, intuitive design optimized for usability and visual clarity

**👉 Responsiveness**: Fully responsive layout that adapts seamlessly across all screen sizes and devices

## <a name="diagram-screenshots">🧩 Diagram and 📸 Screenshots</a>

- **🧩 Database Tables Diagram**: [drawSQL Diagram Link](https://drawsql.app/teams/evans-projects/diagrams/order-food-app)
- **📸 Screenshots**: [Miro Link](https://miro.com/app/board/uXjVI0aDhM0=/?share_link_id=91185319434)

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

---

**⭐ Set Up AWS**

Create an AWS account and ensure you qualify for the 12-month Free Tier if you're a new user. Otherwise, you may incur charges when using AWS services. Each AWS service has its own Free Tier policy—refer to the [AWS Free Tier page](https://aws.amazon.com/free) for details. (You can follow relevant AWS setup tutorials on YouTube to guide you through the steps below.)

> **⚠️ Note**
>
> - **✅ Minimum Requirement**
>
>   - **AWS Cognito** must be configured to use the app. User authentication won't work without it.
>
> - **🧩 Optional Services**
>   - **AWS S3**: Required to display mock data images. Without it, image uploading and seeded image display will be disabled, but all other features remain usable.
>   - **AWS IAM, SNS, and SES**: Required for the notification system to send and receive email alerts. The app will function without these, just without notifications.

**🔐 Set up AWS Cognito and create a User Pool**:

1. Go to AWS Cognito service
2. Create a User Pool
    - Click **Create User pool** button
    - Choose **"Single-page application"** as the application type
    - Enter your desired **application name** (eg. appName-cognito-userpool)
    - Under **Options for sign-in identifiers**, select both **"Email"** and **"Username"**
    - Under **Required attributes for sign-up**, choose **"email"**
    - Click **Create user directory** button
3. Add "role" custom attribute
    - After creating the user pool, go to the **Authentication > Sign-up** tab and add a custom attribute named "role"
4. Note down the **User pool ID and User pool app client ID**—you'll need them later in the **Set Up Environment Variables step**

**🗂️ Set up AWS S3**:

1. Go to AWS S3 service
2. Create a S3 bucket
    - Click **Create bucket** button
    - Select **General purpose** for bucket type
    - Enter your desired **bucket name** (eg. appName-s3-images)
    - Disable **Block all public access** and **check** the check box of warning alert to acknowledge the disable action
    - Keep the rest of things by default in this page
    - Click **Create bucket** button
3. Configure created S3 bucket permission
    - Click the S3 bucket we just created to go to bucket info page
    - Select **Permissions** tab
    - Scroll to the bottom and click **Edit** button of **Bucket policy**
    - Copy and paste below script to update the policy allow all users to view the files in this S3 bucket.
    - ⚠️ Note: remember to change the **Placeholder of Bucket ARN** to your real **Bucket ARN** in this page

      ```
      {
          "Version": "2012-10-17",
          "Statement": [
              {
                  "Sid": "Statement1",
                  "Effect": "Allow",
                  "Principal": "*",
                  "Action": "s3:GetObject",
                  "Resource": "Placeholder of Bucket ARN/*"
              }
          ]
      }
      ```

    - Click **Save changes** button
4. Note down the **S3 bucket name** for latter usage

**🔑 Set up AWS IAM**:
1. Go to AWS IAM service
2. Create an **AWS IAM user** with **full access to SES and SNS**:
3. Generate and note down the **IAM user Access Key ID and Secret Access Key**

**✉️ Set up AWS SES**:
1. Go to AWS SES service
2. Verify both your **sender email and recipient email** addresses
3. ⚠️ Note: In **sandbox mode**, SES requires the recipient email to be verified in the **Identities section**
4. Note down your **verified sender email**

**📣 Set up AWS SNS**:
1. Go to AWS SNS service
2. Create a topic for managing email or app notifications
3. Note down the **ARN of Topic**

---

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

Create an AWS account and ensure you qualify for the 12-month Free Tier if you're a new user. Otherwise, you may incur charges when using AWS services. Each AWS service has its own Free Tier policy—refer to the [AWS Free Tier page](https://aws.amazon.com/free) for details. (You can follow relevant AWS setup tutorials on YouTube to guide you through the steps below.)

> ⚠️ **Note**: Most AWS services used for deploying this app—such as EC2, RDS, and others—are only free for **one active instance** under the 12-month Free Tier.  
> To avoid unexpected charges, please ensure you delete any existing instances of these services before deploying your app.

Follow these steps to deploy app in AWS Cloud:

**⭐ Set up VPC for secure Networking**

- Go to AWS VPC service and make sure you are in the proper AWS region closest to you (eg. us-east-1) by checking the top right of dashboard
- Create a new VPC
  - Go to the **Virtual Private Cloud > Your VPCs** tab and click "Create VPC" button
  - Select "VPC only" under "Resource to create" section
  - Enter your desired **Name tag** (eg. appName-vpc)
  - Keep the default selected option of "IPv4 CIDR manual input" under "IPv4 CIDR block" section
  - Enter **10.0.0.0/16**(This number means locking first two variables and only last two variables are changable, so the IP address range is from "10.0.0.0" to "10.0.255.255", which means we will have 256\*256 IP addresses to be assginable to VPC) under "IPv4 CIDR" section to specify the ranges of IP addresses of your VPC
  - Keep the default selected option of "No IPv6 CIDR block" under "IPv6 CIDR block" section
  - Keep the rest of things by default and click "Create VPC" button
- Create 1 public subnet and 2 private subnets (2 private subnets are required for RDS)
  - Go to the **Virtual Private Cloud > Subnets** tab and click "Create subnet" button
  - Select the VPC (eg. appName-vpc) you just created under "VPC ID" section
  - Create 1st public subnet under "Subnet Settings" section
    - Enter your desired **Subnet name** (eg. appName-public-subnet-1)
    - Choose a Availability Zone (eg. us-east-1a)
    - Keep the default **10.0.0.0/16** under IPV4 VPC CIDR block section
    - Enter **10.0.0.0/24**(locks the first 3 variables, that means there are 256 IP addresses for this public subnet to use) under IPV4 subnet CIDR block section
  - Click "Add new subnet" button and create 1st private subnet
    - Enter your desired **Subnet name** (eg. appName-private-subnet-1)
    - Choose a Availability Zone (eg. us-east-1a)
    - Keep the default **10.0.0.0/16** under IPV4 VPC CIDR block section
    - Enter **10.0.1.0/24** under IPV4 subnet CIDR block section
  - Click "Add new subnet" button and create 2nd private subnet
    - Enter your desired **Subnet name** (eg. appName-private-subnet-2)
    - Choose a Availability Zone (eg. us-east-1b) (We need different Availability Zone for 2nd private subnet because they are different data centers and servers that will run our private sever. If one of them goes down, there will be 2nd one available to back it up. We need it for your database)
    - Keep the default **10.0.0.0/16** under IPV4 VPC CIDR block section
    - Enter **10.0.2.0/24** under IPV4 subnet CIDR block section
  - Click "Create subnet" button
- Create an Internet gateway
  - Go to the **Virtual Private Cloud > Internet gateways** tab and click "Create Internet gateway" button
  - Enter your desired **Name tag** (eg. appName-internet-gateway)
  - Click "Create internet gateway" button
  - You will be redirected to the created internet gateway info page, and there is a banner on the top of the page.
  - Click the "Attach to a VPC" button inside top banner
  - Select the VPC (eg. appName-vpc) you just created under "Available VPCs" section
  - Click "Attach internet gateway" button
- Create 1 public route table and 2 privates route tables (Route table is kind of white list of IP address, which is associated with VPC or subnet level. VPC has a main Route table and each subnet has their own public or private Route table. Public route table of public subneet allows access from everywhere and private route table of private subnet only allows access only from our public subnet)
  - Go to the **Virtual Private Cloud > Route tables** tab
  - Create 1st public route table
    - Click "Create route table" button in "Route tables" page
    - Enter your desired **Name** (eg. appName-public-route-table-1)
    - Select the VPC (eg. appName-vpc) you just created under "VPC" section
    - Click "Create route table" button
    - You will be redirected to the created public route table info page
    - Click "Actions" button on the top right of "public route table info" page and select "Edit subnet associations" button in the drop down menu
    - Select the created public subnet (eg. appName-public-subnet-1)
    - Click "Save associations" button
  - Create 1st private route table
    - Click "Create route table" button in "Route tables" page
    - Enter your desired **Name** (eg. appName-private-route-table-1)
    - Select the VPC (eg. appName-vpc) you just created under "VPC" section
    - Click "Create route table" button
    - You will be redirected to the created private route table info page
    - Click "Actions" button on the top right of "private route table info" page and select "Edit subnet associations" button in the drop down menu
    - Select the created 1st private subnet (eg. appName-private-subnet-1)
    - Click "Save associations" button
  - Create 2nd private route table by following the same steps above, but just the private route table name will be (eg. appName-private-route-table-2) and associate it to the created 2nd private subnet (eg. appName-private-subnet-2)
  - Update the acceess of public route table (it has same access as private route table now)
    - Click the public route table in "Route tables" page to go to "public route table info" page
    - Click "Edit routes" button
    - Right now, it's only accessable to local. Anything inside the public subnet can only access the IPV4 VPC CIDR block IP addressees range scope including private subnets. It's does not have public internet access. So we need to give it for public internet access.
    - Click "Add route" button
    - Select **0.0.0.0/0** in Destination field
    - Select "Internet Gateway in first Target field and select the internet gateway we just created (eg. appName-internet-gateway) in second Target field
    - Click "Save changes" button
- We will set up Security groups for EC2 and RDS in latter steps (security group is kind of black list of IP addresses, which is associated with individual AWS service level)

**⭐ Set up EC2 and deploy server**

- Go to AWS EC2 service
- Create a new EC2 instance
  - Go to the **Instances > Instances** tab and click "Launch instances" button
  - Enter your desired **Name tag** (eg. appName-ec2)
  - Selelct "Quick Start" and keep the "Amazon Linux" defualt selected option under "Application and OS images" section
  - Keep the "Amazon Linux 2023 AMI - Free tier eligible" defualt selected option under "Amazon Machine Image (AMI)" section
  - Keep the default selected option under "Description" section
  - Keep the default selected instance type with "Free tier eligible" tag under "Instance type" section
  - Create a new key pair by choosing "RSA" key pair type and ".pem" prviate key file format if you are macOS and select the created newe key pair under "Key pair name" section
  - Select all "Allow SSH traffic from", "Allow HTTPS traffic from the internet", "Allow HTTP traffic from the internet" options and keep "Create security group" defualt selected option under "Network settings" section
  - Click the "Edit" button of "Network settings" section
  - Select the VPC (eg. appName-vpc) and public subnet (eg. appName-public-subnet-1) we just created.
  - Enable "Auto-assgin public IP"
  - Keep "Create security group" defualt selected option under "Firewall" section
  - Enter your desired **Security group name** (eg. appName-ec2-sg) and update the security group name under "Description" section to be same as your desired name (eg. appName-ec2-sg)
  - Keep the rest of things with default set up and click "Launch instance" button
- Connect to the cloud computer of EC2 instance
  - Click the new EC2 instance you just created in **Instances > Instances** page to go to "EC2 instance info" page
  - Click "Connect" button on the top right of EC2 instance info page to go to "Connect to instance" page
  - Keep everything under "EC2 Instance Connect" tab by default selected option and click "Connect" button to open cloud computer terminal
- Config the cloud computer of EC2 instance (Check "aws-ec2-instructions.md" file for command lines detail explanation under "order-food/server" path)

  - Switch to superuser in cloud computer terminal by running

    ```
    sudo su -
    ```

  - Install Node Version Manager (nvm) and Node.js by running

    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    . ~/.nvm/nvm.sh
    nvm install node
    node -v
    npm -v
    ```

  - Update the system, install Git and clone app repo to cloud computer by running

    ```
    sudo yum update -y
    sudo yum install git -y
    git --version
    git clone [your-github-link]
    ```

  - Install packages, create Env File and start the application by running

    ```
    cd order-food
    cd server
    npm i
    echo "PORT=80" > .env
    npm run dev
    ```

  - Install pm2 (Production Process Manager for Node.js) and set pm2 to restart automatically on system reboot by running

    ```
    npm i pm2 -g
    sudo env PATH=$PATH:$(which node) $(which pm2) startup systemd -u $USER --hp $(eval echo ~$USER)
    ```

  - Start the application using the pm2 ecosystem configuration by running

    ```
    pm2 start ecosystem.config.js
    ```

  - Manage pm2 project with these command lines below:

    - Stop all processes:

      ```
      pm2 stop all
      ```

    - Delete all processes:

      ```
      pm2 delete all
      ```

    - Check status of processes:

      ```
      pm2 status
      ```

    - Monitor processes:

      ```
      pm2 monit
      ```

- Test if our server is running in EC2 successfully or not
  - Click the new EC2 instance you just created in **Instances > Instances** page to go to "EC2 instance info" page
  - Click copy button under "Auto-assigned IP address" to copy the IP address value
  - Paste the `http://IPAddressYouJustCopied` url to Chrome broswer
  - You will see "This is home route" text in the web page if your server is running in EC2 successfully

**⭐ Set up RDS for PostgreSQL Database**

- Go to AWS RDS service
- Create a new RDS database
  - Go to the **Databases** tab and click "Create database" button
  - Select "Standart create" option to make sure we won't be charged by any potenial cost default settings
  - Select "PostgreSQL" for "Engine type" under "Engine Options" section
  - Keep everything as default selected option under "Engine Options" section
  - Select "Free tier" option under "Templates" section
  - Keep the default selected option under "Availabilty and durability" section
  - Enter your desired **Database name** (eg. appName-rds) for DB instance identifer under "Settings" section
  - Select "Self managed" for "Credentials Management"
  - Note down your master username and password for latter usage of builindg `DATABASE_URL` env variable
  - Keep the default selected option under "Instance configuration" section
  - Keep the "Storage type" and "Allocated storage" as default under "Storage" section
  - Click "Additional storage configuration" to open collapse section under "Storage" section and disable "storage autoscaling" for any potential charge
  - Select "Don't connect to an EC2 compute resource for "Compute resource" under "Connectivity" section
  - Select VPC we just created (eg. appName-vpc)
  - Keep "Create new DB Subnet Group" as the default selected option for "DB subnet group" (Make sure to have 2 privates subnet to view this option)
  - Keep "No" as the default selected option for "Public access" (Don't assgin a public IP address for RDS because you already have 1 public IP address in EC2, Otherwise, you will be charged for 2nd public IP address)
  - Select "Create new" for "VCP security group"
  - Enter your desired **New VPC security group name** (eg. appName-rds-sg)
  - Select the same Availabilty Zone as your 1st private subnet (eg. us-east-1a)
  - Keep the rest of things under "Connectivity" section by default
  - Keep "Tags" and "Database authentication" sections by default
  - Disable "Performance Insights" under "Monitoring" section
  - Enter your desired **Initial database name** (eg. appName) under "Additional configuration" section and note down it for latter usage of builindg `DATABASE_URL` env variable
  - Disable both "automated backups" and "encryption" for Backup and Encryption
  - Keep the rest of things under "Additional configuration" section by default
  - Click "Create database" button
- Allow EC2 access to RDS database by setting inbound rules of RDS security group
  - Go to the **Databases** tab and click the new database we just created to go to database info page
  - Click the "VPC security groups" under "Connectivity & security" tab to go to "Security Groups" page
  - Click the created security group during RDS database creation process to go to this security group page
  - Click "Edit inbound rules" button
  - Click "Add rule" button
  - Select "PostgreSQL" for Type field and keep the "Custom" as default for Source field
  - Select the security group of EC2 (eg. appName-ec2-sg) for the field between Source and Description fields
  - Click "Save rules" button
- Allow EC2 access to RDS database by setting outbound rules of EC2 security group
  - Go to AWS EC2 service and go to the **Instances > Instances** tab
  - Click our EC2 instance (eg. appName-ec2) to go to instance info page
  - Click the "Security groups" under "Security" tab to go to EC2 security group info page
  - Click "Edit outbound rules" button under "Outbound rules" tab
  - Click "Add rule" button
  - Select "PostgreSQL" for Type field and keep the "Custom" as default for Destination field
  - Select the security group of RDS (eg. appName-rds-sg) for the field between Destination and Description fields
  - Click "Save rules" button
- Build `DATABASE_URL` for RDS PostgreSQL database
  - Go to the **Databases** tab and click the new database we just created to go to database info page
  - Copy the the value of "Endpoint" under "Connectivity & security" tab and we will use the value as `urlForRDS` in `DATABASE_URL`
  - You noted down `masterUsername`, `password` and `databasename` values during RDS database creation
  - Now, you can build `DATABASE_URL="postgresql://masterUsername:password@urlForRDS:5432/databasename?schema=public"`
- Add `DATABASE_URL` env variable to EC2 app project server `.env` file
  - Connect to the cloud computer terminal of EC2 instance
  - Switch to supser user and delete the exsting PM2 running app
  - Cd to `server` folder, run `nano .env` command line to open `.env` file and copy paste the whole `DATABASE_URL` variable into `.env` file
  - Press "control + X", "Y", "Enter key" to save the file change
- Set up RDS database in EC2 server by running

  ```
  cd order-food/server
  npx prisma migrate reset
  npm run prisma:generate
  npm run seed
  ```

- Start PM2 project again

  ```
  pm2 start ecosystem.config.js
  ```

- Test if EC2 connects to RDS database successfully or not
  - Click the new EC2 instance you just created in **Instances > Instances** page to go to "EC2 instance info" page
  - Click copy button under "Auto-assigned IP address" to copy the IP address value
  - Paste the `http://IPAddressYouJustCopied/restaurant` url to Chrome broswer
  - You will see a list of restaurant mock data if your EC2 connects to RDS database successfully

**⭐ Set up Amplify and deploy client**

- Go to AWS Amplify service
- Deploy App
  - Click "Deploy an app" button
  - "Choose source code provider" Step
    - Select "GitHub"
    - Click "Next" button
  - "Add repository and branch" Step
    - Connect your GitHub account and update GitHub permission of your project repo
    - Select your project repo and use "main" or "master" branch
    - Enable "My app is a monorepo" and Enter "client" for "Monorepo root directory"
    - Click "Next" button
  - "App settings" Step
    - Click "Advanced settings" to open collapse section
    - Add those 4 environment variables and corresponding value one by one by clicking "Add new" button `NEXT_PUBLIC_API_BASE_URL, NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID, NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID, NEXT_PUBLIC_VAPI_WEB_TOKEN`
    - The values of last 3 environment variables remain the same as local `.env` file of `client` folder.
    - Set the value for `NEXT_PUBLIC_API_BASE_URL`
      - Click the new EC2 instance you just created in **Instances > Instances** page to go to "EC2 instance info" page
      - Click copy button under "Public IPV4 address" to copy the IP address value
      - Use `http://IPAddressYouJustCopied` for the value of `NEXT_PUBLIC_API_BASE_URL` (Note: This value won't work now, and we will come back to fix it in latter step)
    - Enable "Keep cookies in cache key"
    - Keep the rest of things by default in "App settings" page
    - Click "Next" button
  - "Review" Step
    - Click "Save and deploy" button
- View deployed app
  - Click "Visit deployed URL" button to view your app once client deployment is finished

**⭐ Set up API Gateway**

Our front-end clint is currently hosted on "HTTPS", but our back-end server in EC2 instance is hosted on "HTTP". If client makes a request to back-end, it will run into an error called blocked mixed content fro browsers. The easy way to solve it is to use API Gateway if you don't want to do complicated way with "HTTPS" certificate and manage it by yourself. API Gateway allows us to automatically set up the "HTTPS", and we can set up back-end routes via API Gateway, which connects HTTPS client with HTTP server.

- Go to AWS API Gateway service
- Create an API
  - Go to **APIs** tab and click "Create API" button
  - Select "REST API" and click "Build" button
  - Select "New API" for "API details"
  - Enter your desired **API name** (eg. appName-api-gateway)
  - Click "Create API" button and you will be redirected to **Resources** tab of this created API info page
- Create resources for API
  - Create and config Proxy resource
    - Click "Create resource" button
    - Enable "Proxy resource"
    - Keep "/" path default selected option for "Resource path"
    - Enter "{proxy+}" for "Resource name"
    - Enable CORS(Cross Origin Resrouce Sharing)
    - Click "Create resource" button and you will be redirected to **Resources** tab
    - Now, you can see a "/{proxy+}" path under "/" path
    - Select "ANY" inside of "/{proxy+}" path and click "Edit integration" button
    - Select "HTTP" for "Integration type"
    - Enable "HTTP proxy integration"
    - Select "ANY" for "HTTP method"
    - Set value for "Endpoint URL"
      - Click the new EC2 instance you just created in **Instances > Instances** page to go to "EC2 instance info" page
      - Click copy button under "Public IPV4 address" to copy the IP address value
      - Use `http://IPAddressYouJustCopied/{proxy}` for the value of "Endpoint URL"
    - Keep the rest of things by default in this page
    - Click "Save" button
  - Create a Cognito authorizer
    - Click **Authorizers** tab and click "Create authorizer" button
    - Enter your desired **Authorizer name** (eg. appName-api-gateway-cognito-authorizer)
    - Select "Cognito" for "Authorizer type"
    - Selec the correct Cognito user pool that you are using for this app
    - Enter "Authorization" for "Token source" and leave "Token validation" empty
    - Click "Create authorizer" button
  - Attach Cognito authorizer to Proxy resource
    - Click **Resources** tab and select "ANY" inside of "/{proxy+}" path
    - Select "Method request" tab and click "Edit" button
    - Selec the Cognito authorizer we just created (eg. appName-api-gateway-cognito-authorizer) for "Authorization"
    - Leave the rest of things by default in this page and click "Save" button
  - Create resource for public API, getRestaurants endpoint
    - Select "/" path and click "Create resource" button
    - Disable "Proxy resource"
    - Keep "/" path default selected option for "Resource path"
    - Enter "restaurant" for "Resource name"
    - Enable CORS(Cross Origin Resrouce Sharing)
    - Click "Create resource" button and you will be redirected to **Resources** tab
    - Select "/restaurant" path and click "Create method" button
    - Select "GET" for "Method type"
    - Select "HTTP" for "Integration type"
    - Enable "HTTP proxy integration"
    - Select "GET" for "HTTP method"
    - Enter `http://IPAddressYouJustCopied/restaurant` for "Endpoint URL" by following the same steps before in creating Proxy resource section
    - Keep the rest of things by default in this page
    - Click "Create method" button
  - Create resource for public API, getRestaurantMenuItems endpoint
    - Select "/" path and click "Create resource" button
    - Disable "Proxy resource"
    - Keep "/" path default selected option for "Resource path"
    - Enter "menuItem" for "Resource name"
    - Enable CORS(Cross Origin Resrouce Sharing)
    - Click "Create resource" button and you will be redirected to **Resources** tab
    - Select "/menuItem" path inside "/" path and click "Create resource" button
    - Disable "Proxy resource"
    - Keep "/menuItem" path default selected option for "Resource path"
    - Enter "{restaurantId}" for "Resource name"
    - Enable CORS(Cross Origin Resrouce Sharing)
    - Click "Create resource" button and you will be redirected to **Resources** tab
    - Select "/{restaurantId}" path inside "/menuItem" path and click "Create resource" button
    - Disable "Proxy resource"
    - Keep "/menuItem/{restaurantId}" path default selected option for "Resource path"
    - Enter "menuItems" for "Resource name"
    - Enable CORS(Cross Origin Resrouce Sharing)
    - Click "Create resource" button and you will be redirected to **Resources** tab
    - Select "/menuItems" path inside "/{restaurantId}" path and click "Create method" button
    - Select "GET" for "Method type"
    - Select "HTTP" for "Integration type"
    - Enable "HTTP proxy integration"
    - Select "GET" for "HTTP method"
    - Enter `http://IPAddressYouJustCopied/menuItem/{restaurantId}/menuItems` for "Endpoint URL" by following the same steps before in creating Proxy resource section
    - Keep the rest of things by default in this page
    - Click "Create method" button and you will be redirected to **Resources** tab
- Deploy API
  - Click "Deploy API" button
  - Select "New stage" for "Stage"
  - Enter your desired **Stage name** (eg. prod)
  - Click "Deploy" button and you will be redirected to **Stages** tab
- Update the `NEXT_PUBLIC_API_BASE_URL` environment variable in Amplify with correct url
  - Click the copy button for the "Invoke URL" of your stage (eg. prod)
  - Go to AWS Amplify service and select your app
  - Click **Hosting > Environment variables** tab
  - Click "Manage variables" button
  - Replace the value of `NEXT_PUBLIC_API_BASE_URL` to the "Invoke URL" you just copied
  - Click "Save" button
- Redeploy app client after changing environment variable
  - Click **Overview** tab and click main or master branch
  - Click "Redeploy this version" button in **Deployments** tab
  - Click the URL of "Domain" to view your application after deployment is finished.
- You should be able to view all restaurants in home page and menu items of any restaurant in sigle restaurang page without sign in as a user
- You can test all features by sign in as a customer, restaurant and driver roles.
- If everything works well, you deploy the app to AWS cloud successfully. Congratulation 🎉🎉🎉

## <a name="note-schemas-update">📌 Note for Schemas Update</a>

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
