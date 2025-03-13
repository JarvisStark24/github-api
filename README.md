# GitHub API  

A simple Node.js API that fetches GitHub followers, followings, and issues using the GitHub REST API.  

## 🚀 Features  

- Fetch a user's followers  
- Fetch a user's followings  
- Retrieve issues from a repository  

## 🌐 Live Demo  

The API is hosted on Render:  
👉 [GitHub API on Render](https://github-api-z925.onrender.com/github)  

## 🛠️ Technologies Used  

- **Node.js** – Backend framework  
- **Express** – Server-side framework  
- **Axios** – HTTP client for API requests  
- **Dotenv** – Manage environment variables  
- **CORS** – Enable cross-origin requests  

## 📦 Installation  

1. Clone the repository:  
   ```sh
   git clone https://github.com/your-username/github-api.git
   cd github-api
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Create a `.env` file and add your GitHub personal access token:  
   ```
   GITHUB_TOKEN=your_github_token
   ```  
4. Start the server:  
   ```sh
   node index.js
   ```  

## 📡 API Endpoints  

### 1. Get Followers  
   ```
   GET /followers/:username
   ```  
   - **Description:** Fetches the list of followers of a user.  
   - **Example:** `/followers/octocat`  

### 2. Get Followings  
   ```
   GET /followings/:username
   ```  
   - **Description:** Fetches the list of users a person is following.  
   - **Example:** `/followings/octocat`  

### 3. Get Issues  
   ```
   GET /issues/:owner/:repo
   ```  
   - **Description:** Retrieves issues from a given GitHub repository.  
   - **Example:** `/issues/facebook/react`  

## 🔥 Future Scope  

- Implement authentication using OAuth for secure API requests  
- Add pagination for large datasets  
- Support additional GitHub API features (repositories, commits, etc.)  
- Deploy to more cloud platforms (e.g., Vercel, Heroku)  

## 📢 Updates  

- **v1.0.0** – Initial release with basic endpoints  

## 📝 License  

This project is licensed under the **ISC License**.  

---
