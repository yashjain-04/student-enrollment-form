# Student Enrollment Form using JsonPowerDB

> **Note:** To run this project, generate your **Connection Token** from your 'JsonPowerDB Developer Account' and replace the value of `connToken` in the `js/index.js` file.

## 📌 Description
This is a **micro-project** built using **HTML, CSS, JavaScript**, and **JsonPowerDB (JPDB)**. It demonstrates how to perform **real-time CRUD operations** using a RESTful API, without the need for any backend scripting or server setup.

This project simulates a **Student Enrollment System**, where you can Save, Update, and Reset student data. It validates entries and uses JPDB to store and fetch student records based on the primary key `Roll No`.

## 🔗 Live Demo

👉 [Click here to view the deployed project](https://yashjain-04.github.io/student-enrollment-form/)


---

## 📈 Benefits of using JsonPowerDB

JsonPowerDB is a **Next-Gen, High Performance, Lightweight, and Serverless DBMS** with REST API services. Here are key benefits:

- Developer-friendly with a **simple REST API**
- No need for backend programming to perform DB operations
- **Schema-free**, easy to use, and fast development
- Built-in web server and in-memory caching for lightning-fast performance
- Supports multiple data models: **Document DB, Key-Value DB, and RDBMS**
- **Real-time, Ajax-enabled, and serverless** experience for frontend developers
- Easily integrates with any platform — web, mobile, IoT, etc.

---

## ⚙️ Scope of Functionalities

- User can enter `Roll No` (Primary Key)
  - If the `Roll No` doesn't exist → enables Save and Reset
  - If it exists → loads data and enables Update and Reset
- Save student data to the JPDB database
- Update existing student records
- Reset the form at any stage
- Real-time interaction with JsonPowerDB via REST APIs
- All form fields are validated (no empty submissions allowed)

---

## 🚀 Technologies Used

- HTML5  
- CSS3  
- JavaScript  
- JsonPowerDB (NoSQL DBMS)  
- Talend API Tester (for request testing)  
- NetBeans (for development)  

---

## 💡 Use Cases of JsonPowerDB

- Dynamic Web Applications  
- Mobile App Backends  
- Session/Page Caching  
- IoT Applications  
- Live HTML Templates  
- Reporting and Analytics for Existing DBs  

---

## 💻 Examples of Use

- Enter a new Roll No → form fields become editable → click Save → data is stored  
- Enter an existing Roll No → data auto-fills → click Update to modify → updated in DB  
- Click Reset at any point to clear and reset form state  

---

## 📌 Project Status
✅ **Completed** – Fully working web-based student enrollment form with backend-less architecture powered by JPDB.

---

## 🕓 Release History

- **v1.0 (May 30, 2025)** – Initial release of project using JPDB.

---

## 📚 Sources

- 🔗 [JsonPowerDB – Official Website](https://login2explore.com/jpdb/index.html)  
- 🔗 [Talend API Tester – Chrome Extension](https://chrome.google.com/webstore/detail/talend-api-tester)  
- 🔗 [Login2Xplore JPDB Documentation](https://login2explore.com)  

---

## 📎 Other Information

- Created as part of the **Login2Xplore Internship Micro-Project Round**
- Built using **NetBeans IDE** and tested with **Talend API Tester**
- Uses **shared JPDB instance** provided by Login2Xplore for free access

---

## 📝 License
This project is for educational and demonstration purposes.
