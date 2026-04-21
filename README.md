# 💼 Job Portal Platform

A full-stack **Job Portal Web Application** where employers can post jobs and freelancers can bid with custom price and deadlines. The platform includes authentication, job management, and a complete bidding workflow system.

🌐 **Live Site:** https://job-portal-aa5bd.web.app
🖥️ **Server Repository:** https://github.com/xunaiet-faruk/Job-portal-server

---

## 📌 Overview

This platform connects **Employers** and **Freelancers** in a structured workflow:

* Employers can post and manage jobs
* Freelancers can bid with price & deadlines
* Employers can accept or reject bids
* Users get a personalized dashboard to track all activities

---

## 🚀 Features

### 🔐 Authentication

* Firebase Authentication (Login / Register)

---

### 💼 Job Management

* Add, update, and delete jobs
* Category-based jobs:

  * Web Development
  * Digital Marketing
  * Graphics Design

---

### 💰 Bidding System

* Freelancers can place bids with:

  * Custom price
  * Deadline
* Employers can:

  * Accept bids
  * Reject bids

---

### 📊 Dashboard

* **My Posted Jobs** → Manage job posts
* **My Bids** → Track bid status
* **Bid Requests** → Accept/reject bids

**Bid Status:**

* Pending
* In Progress
* Completed
* Rejected

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Tailwind CSS + DaisyUI
* Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB

### Tools & Services

* Firebase (Authentication & Hosting)
* Axios

---

## 📦 Run Locally

### 🔹 Frontend Setup

#### 1️⃣ Clone client repo

```bash
git clone https://github.com/xunaiet-faruk/jobs-portal-web-client
cd jobs-portal-web-client
```

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Run frontend

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

### 🔹 Backend Setup

#### 1️⃣ Clone server repo

```bash
git clone https://github.com/xunaiet-faruk/Job-portal-server.git
cd Job-portal-server
```

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Setup environment variables

Create a `.env` file in the root:

```
PORT=3000
USER_NAME=your_mongodb_connection_name
USER_PASS=your_mongodb_connection_password
```

#### 4️⃣ Run backend server

```bash
npm run start
```

Backend will run on:

```
http://localhost:3000
```

---

## 🔗 API Connection

Frontend communicates with backend using Axios:

```js
import axios from "axios";
import { useMemo } from "react";

const Useaxios = () => {
    const axiosInstance = useMemo(() => {
        return axios.create({
            // Local server
            // baseURL: "http://localhost:3000"

            // Production server
            baseURL: "https://job-portal-server-delta-eight.vercel.app"
        });
    }, []);

    return axiosInstance;
};

export default Useaxios;
```

---

## ⚠️ Important Notes

* Run backend server before frontend
* Ensure MongoDB credentials are correct
* Update API baseURL when switching between local & production
* Keep `.env` file secure and never commit it

---

## 🚀 Future Improvements

* Admin dashboard
* Advanced job filtering & search
* Real-time notifications
* Resume upload system

---

## 👨‍💻 Author

**Junaiet Faruk**

---


