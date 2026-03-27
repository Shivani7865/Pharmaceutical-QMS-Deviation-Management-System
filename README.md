# 🧪 Pharmaceutical QMS Deviation Management System

A simulated **Pharmaceutical Quality Management System (QMS)** built to demonstrate real-world **Deviation Management workflows**, QA testing practices, and role-based system navigation used in API manufacturing industries.

---

## 📌 Project Overview

This project replicates how pharmaceutical companies manage **manufacturing deviations** under GMP compliance.

The system allows users to:

✅ Sign Up  
✅ Login (Role-Based Access)  
✅ Navigate Dashboard  
✅ Create Deviation / Non-Conformance Records  
✅ Perform QA Testing Scenarios  

The project was developed as part of a **Pharma QMS Understanding & Testing Assignment**.

---

## 🏭 Industry Context

In pharmaceutical manufacturing, a **Deviation** is any departure from approved procedures or expected process parameters.

Example deviations:
- Reactor temperature exceeded limit
- Wrong raw material lot used
- Batch failure
- Equipment breakdown

This system simulates how QA teams track and investigate such events.

---

## ⚙️ Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | HTML |
| Styling | CSS |
| Logic | JavaScript |
| Storage | LocalStorage |
| Testing | Manual QA Testing |
| Automation (Optional) | Selenium |

---

## 🔐 Application Workflow
Signup → Login → Dashboard → Deviation Module



### 1️⃣ Signup
User creates account with:
- Username
- Password
- Role (QA / Production Manager)

---

### 2️⃣ Login
System validates credentials and redirects to Dashboard.

---

### 3️⃣ Dashboard
Displays:
- Logged-in user
- Role information
- Navigation to Deviation Module

---

### 4️⃣ Deviation Module
Users can create deviation records including:
- Deviation ID
- Description
- Severity Level
- Status Tracking

---

## 🧪 QA Testing Coverage

### ✔ Positive Test Scenarios
- Successful signup & login
- Valid deviation creation

### ❌ Negative Scenarios
- Empty required fields
- Invalid login credentials

### ⚠ Boundary Testing
- Character limits
- Mandatory validations

### 🔁 Workflow Testing
- Authentication flow
- Role-based access
- Navigation validation

---

## 📊 Real Pharma QMS Concepts Covered

- In-Process Quality
- Deviation Management
- CAPA (Corrective & Preventive Actions)
- Product Quality Monitoring
- GMP Compliance Thinking

<h2>screenshots</h2>


<img src="QMS/assets/login.png width="70%"/>
