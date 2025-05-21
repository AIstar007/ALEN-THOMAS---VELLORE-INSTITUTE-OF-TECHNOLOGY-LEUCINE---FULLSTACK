# ALEN-THOMAS---VELLORE-INSTITUTE-OF-TECHNOLOGY-LEUCINE---FULLSTACK

## 📝 Todo Summary Assistant

A full-stack application to manage your personal to-do list and summarize it using an LLM, with the summary sent to a Slack channel.

---

### 🔧 Tech Stack

- **Frontend**: React
- **Backend**: Node.js + Express
- **Database**: Supabase (PostgreSQL)
- **LLM**: OpenAI GPT (or Cohere, Mistral, etc.)
- **Notifications**: Slack Incoming Webhook

---

### 🚀 Features

- Add, edit, delete, and view todos.
- Summarize current pending todos using an LLM.
- Send the summary to Slack.
- Show success/failure notifications for Slack delivery.

---

### 🔌 API Endpoints

| Endpoint         | Method | Description                      |
|------------------|--------|----------------------------------|
| `/todos`         | GET    | Get all to-do items              |
| `/todos`         | POST   | Create a new to-do               |
| `/todos/:id`     | DELETE | Delete a to-do by ID             |
| `/summarize`     | POST   | Summarize todos + send to Slack  |

---

### 🧪 Setup Instructions

#### 1. Clone the Repo
```bash
git clone https://github.com/your-username/todo-summary-assistant.git
cd todo-summary-assistant
