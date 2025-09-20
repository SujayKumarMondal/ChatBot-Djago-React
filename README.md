# ChatPaat Project Documentation

## Purpose

**ChatPaat** is a modern chatbot web application built with Django (backend) and React (frontend).
It allows users to register, sign in, and interact with an AI-powered chat assistant.
Each user sees only their own chat history, and all interactions are securely managed.

---

## Main Features

- User registration and authentication (JWT-based)
- Individual chat history per user
- Real-time chat with AI assistant (Groq API integration)
- Responsive, modern UI with sidebar, chat area, and digital IST clock
- Privacy Policy and Terms of Service pages
- Secure backend with user-based data filtering

---

## Project Structure

### Backend (`backend/`)

- **manage.py**: Django’s command-line utility.
- **db.sqlite3**: SQLite database file.
- **requirements.txt**: Python dependencies (Django, djangorestframework, etc.).
- **chatpaat/**: Django project settings and configuration.
	- **settings.py**: Main settings (database, apps, middleware, JWT config).
	- **urls.py**: Root URL configuration.
	- **wsgi.py/asgi.py**: Server entry points.
- **chatpaat_app/**: Main Django app for chat logic.
	- **models.py**:  
		- `CustomUser`: Extends Django’s user model (unique email).
		- `Chat`: Stores chat sessions, linked to a user.
		- `ChatMessage`: Stores individual messages in a chat.
	- **serializers.py**:  
		- `ChatSerializer`: Serializes chat objects (includes user).
		- `ChatMessageSerializer`: Serializes chat messages.
	- **views.py**:  
		- User registration/login endpoints.
		- Chat endpoints (create, fetch, filter by user).
		- Groq API integration for AI responses.
		- All endpoints require authentication for user data.
	- **urls.py**:  
		- Maps API endpoints to views.
	- **migrations/**: Database migration files.
	- **templates/index.html**: Optional landing page.

---

### Frontend (`frontend/`)

- **public/**: Static assets.
- **src/**: Main React source code.
	- **App.tsx**:  
		- Main app component and router.
		- Defines routes for chat, about, terms, privacy policy, etc.
	- **pages/**:
		- **HomePage.tsx**:  
			- Main chat interface.
			- Displays messages, input box, and footer with links.
		- **AboutPage.tsx**: About the app.
		- **TermsPage.tsx**: Terms of Service.
		- **PrivacyPolicyPage.tsx**: Privacy Policy.
		- **RegisterPage.tsx**: User registration.
		- **SignIn.tsx**: User login.
	- **components/**:
		- **AppSidebar.tsx**:  
			- Sidebar with IST clock, chat history, navigation.
			- Fetches and displays only the signed-in user's chats.
		- **MainLayout.tsx**: Layout wrapper.
		- **TypingLoader.tsx**: Loader animation for AI response.
		- **ui/**:  
			- Reusable UI components (button, input, badge, sidebar, etc.).
	- **context/**:
		- **AuthContext.tsx**:  
			- Manages user authentication state.
			- Provides sign-in, sign-out, register functions.
	- **lib/**:
		- **api.ts**:  
			- API functions for chat, messages, history.
			- All requests send JWT token for authentication.
		- **utils.ts**: Utility functions.
	- **hooks/**: Custom React hooks.
	- **assets/**: Images and icons.

---

## Key File Usage

- **models.py**: Defines all database models (users, chats, messages).
- **serializers.py**: Converts models to JSON for API responses.
- **views.py**: Handles all backend logic (auth, chat, AI integration).
- **api.ts**: Centralizes all frontend API calls, always sends JWT token.
- **AuthContext.tsx**: Stores user info and token, provides auth functions.
- **AppSidebar.tsx**:  
	- Shows IST clock (dynamic, styled).
	- Displays only the current user's chat history.
	- Clears chat history on logout.
- **HomePage.tsx**:  
	- Main chat UI.
	- Footer with Terms and Privacy Policy links.
	- Handles message sending and display.
- **TermsPage.tsx & PrivacyPolicyPage.tsx**:  
	- Static pages for legal information.

---

## Authentication & Security

- Uses JWT for secure authentication.
- All chat endpoints require a valid token.
- Each chat is linked to a user; only that user can view their chats.
- On logout, chat history and messages are cleared from the UI.

---

## Custom Features

- **IST Digital Clock**:  
	- Live, styled clock in sidebar, always shows correct Indian Standard Time.
- **Responsive UI**:  
	- Sidebar, chat area, and footer adapt to screen size.
- **Groq API Integration**:  
	- Backend sends user messages to Groq for AI-powered responses.

---

## How to Add More Features

- Add new pages in `src/pages/` and route them in `App.tsx`.
- Add new models in `models.py` and migrate with Django.
- Add new API endpoints in `views.py` and map them in `urls.py`.
- Extend UI by adding new components in `src/components/`.

---

## How to Run

1. **Backend**:
	 - Install Python dependencies: `pip install -r requirements.txt`
	 - Run migrations: `python manage.py migrate`
	 - Start server: `python manage.py runserver`

2. **Frontend**:
	 - Install Node dependencies: `npm install`
	 - Start dev server: `npm run dev`

---

## Summary Table

| File/Folder                | Purpose/Usage                                      |
|----------------------------|----------------------------------------------------|
| backend/chatpaat_app/models.py      | Database models (User, Chat, ChatMessage)         |
| backend/chatpaat_app/views.py       | API logic, authentication, chat, Groq integration |
| backend/chatpaat_app/serializers.py | Model serializers for API responses               |
| backend/chatpaat_app/urls.py        | Maps URLs to views                                |
| frontend/src/lib/api.ts             | API calls from frontend, always sends JWT token   |
| frontend/src/context/AuthContext.tsx| Auth state and functions                          |
| frontend/src/components/AppSidebar.tsx| Sidebar UI, IST clock, chat history              |
| frontend/src/pages/HomePage.tsx     | Main chat UI, footer links                        |
| frontend/src/pages/TermsPage.tsx    | Terms of Service page                             |
| frontend/src/pages/PrivacyPolicyPage.tsx| Privacy Policy page                          |

---

## Final Notes

- All user data is private and secure.
- Only authenticated users can access their own chat history.
- The UI is modern, responsive, and user-friendly.
- Legal pages (Terms, Privacy Policy) are easily accessible.

---

