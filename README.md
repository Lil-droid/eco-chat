# EcoChat 🌱

EcoChat is an environmental awareness chatbot. Ask it about climate change,
pollution, recycling, conservation, sustainability, renewable energy, waste
management, and related topics, and get clear, accurate, conversational
answers powered by Google's Gemini API.

There is no login, no user accounts, and no database — a conversation exists
only in the browser tab for as long as you keep it open.

## Architecture

```
User → EcoChat React UI (Vite) → Vercel serverless function (/api/chat) → Gemini API → back to the user
```

- **Frontend**: React + TypeScript + Tailwind CSS, built with Vite. Two routes:
  `/` (homepage) and `/chat` (chat interface), handled client-side by React Router.
- **Backend**: a single Vercel serverless function at `api/chat.ts`. It holds
  the environmental-assistant system instructions, validates incoming
  requests, calls the Gemini API with the server-only API key, and returns
  just the reply text to the browser.
- **No database, no auth**: chat history lives only in React state on the
  client for the current session and disappears on refresh, by design.

The Gemini API key is read from `process.env.GEMINI_API_KEY` inside the
serverless function only. It is never bundled into client-side JavaScript and
never sent to the browser.

## Project structure

```
api/
  chat.ts              Serverless function: validates requests, calls Gemini, returns a reply
src/
  components/          Reusable UI components (chat bubbles, header, homepage sections, etc.)
  hooks/
    useChat.ts          Chat state, sending logic, error handling
  pages/
    HomePage.tsx         Marketing/info homepage
    ChatPage.tsx          Chat interface
    NotFoundPage.tsx      404 page
  services/
    chatService.ts       Client-side fetch wrapper for /api/chat
  types/
    chat.ts               Shared TypeScript types
  lib/
    utils.ts               Small helpers (id generation)
```

## Prerequisites

- Node.js 18+
- A Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file and add your key:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env`:
   ```
   GEMINI_API_KEY=your_real_key_here
   ```
3. Run the app **with the serverless function available**. The plain Vite
   dev server (`npm run dev`) only serves the frontend and does not run
   `api/chat.ts`, so for full functionality use the Vercel CLI locally:
   ```bash
   npm install -g vercel
   vercel dev
   ```
   This serves both the React app and the `/api/chat` function together,
   matching production behavior.

   (If you only need to work on UI without the API, `npm run dev` is faster,
   but chat requests will fail until you use `vercel dev` or deploy.)

## Available scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Start the Vite dev server (frontend only) |
| `npm run build`    | Type-check and build for production       |
| `npm run preview`  | Preview the production build locally      |
| `npm run lint`     | Run the linter                            |

## Deploying to Vercel

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the repository into [Vercel](https://vercel.com/new).
3. Vercel will detect the Vite framework automatically (a `vercel.json` is
   included to make this explicit).
4. In the Vercel project's **Settings → Environment Variables**, add:
   - `GEMINI_API_KEY` = your Gemini API key
5. Deploy. That's it — the same `api/chat.ts` file becomes a live serverless
   endpoint automatically.

## Environment variables

Only one environment variable is required, documented in `.env.example`:

| Variable          | Where it's used                  | Required |
| ------------------ | --------------------------------- | -------- |
| `GEMINI_API_KEY`   | `api/chat.ts` (server-side only)  | Yes      |

No other secrets, databases, or services are needed.

## Security notes

- The Gemini API key only ever lives in server-side environment variables
  and is read inside the serverless function — it is never included in the
  client JavaScript bundle.
- The `/api/chat` endpoint validates that the request body is a well-formed
  array of messages, enforces a maximum message count and length, and only
  accepts `POST` requests.
- The system instruction explicitly tells the model to ignore attempts,
  embedded in user messages, to override its role or reveal/ignore its
  instructions.
- `.env` is git-ignored; only `.env.example` (with a placeholder) is committed.

## Notes on the AI assistant

EcoChat's Gemini system instructions focus it on environmental topics while
still allowing normal conversation (greetings, brief off-topic replies, etc.).
It's told to explain concepts simply, stay accurate, acknowledge uncertainty
rather than invent statistics, and resist prompt-injection attempts to change
its identity or ignore its guidelines.

---

_This Environmental Awareness Chatbot was developed by Asogba Francis Matthew
(Matric Number: 2460113276) as a final year project submitted in partial
fulfillment of the requirements for the award of National Diploma (ND) in
Computer Science, Federal Polytechnic Ilaro._
