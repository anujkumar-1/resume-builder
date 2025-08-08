
# **Resume Builder** 📄✨

A modern, user-friendly platform to create, customize, and download professional resumes — inspired by [Resume.com](https://www.resume.com/) and packed with all its essential features.

---

## **🚀 Features**

* **Create Multiple Resumes** – Users can build and manage multiple resumes under one account.
* **Predefined Sections** – Add details for:

  * Contact Information
  * Summary / Objective
  * Work Experience
  * Skills
  * Education
  * Languages
  * Certifications
  * Awards
* **Live Preview** – See changes in real-time while editing.
* **PDF Export** – Download resumes in professional PDF format.
* **User Authentication** – Secure sign-up and login with JWT authentication.
* **Mobile-Responsive** – Works seamlessly on desktop, tablet, and mobile.
* **Modern UI** – Minimal and clean design for easy navigation.

---

## **🛠 Tech Stack**

**Frontend**

* HTML (UI)
* CSS (Styling)
* JS (Logic)

**Backend**

* Node.js + Express.js (API Server)
* MySQL + Sequelize ORM (Database)
* Axios

**Other Tools**

* JWT (Authentication)
* AWS S3 (For storing PDF)
* PDFKit (Resume PDF Generation)
* Git & GitHub (Version Control)

---

## **📦 Installation & Setup**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/anujkumar-1/resume-builder.git
   cd resume-builder
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root folder and add:

   ```env
   DB_HOST=your_mysql_host
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=resume_builder_db
   JWT_SECRET=your_jwt_secret
   ```

4. **Run Database Migrations**

   ```bash
   npx sequelize db:migrate
   ```

5. **Start the App**

   ```bash
   npm start
   ```

   or for development:

   ```bash
   npm run dev
   ```

---

## **📸 Screenshots**

*(Add screenshots or GIFs of your app interface here for a better presentation)*

---

## **🤝 Contributing**

We welcome contributions!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature-name`)
5. Open a Pull Request

---

## **📜 License**

This project is licensed under the **MIT License** — feel free to use and modify it.

---

## **📬 Contact**

For any queries or collaboration opportunities:
📧 **[anuj39263@gmail.com](mailto:anuj39263@gmail.com)**
🔗 [GitHub Profile](https://github.com/anujkumar-1)

---

If you want, I can also **add a workflow diagram** showing how a resume is created, saved, and downloaded in your app, so your README stands out more on GitHub.
Do you want me to prepare that diagram for you?
