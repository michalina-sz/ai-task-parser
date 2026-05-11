# AI Task Parser

A small portfolio MVP that turns messy natural language into structured tasks using Next.js and the OpenAI API.

The app is intentionally focused: a user can paste a short brain dump, send it to a server-side parser, and receive a clean list of tasks with type, priority, date, and time when available.

## Features

- Natural language task input
- Server-side OpenAI API integration
- Structured AI output with Zod schema validation
- Loading and error states
- Dark UI built with Tailwind and shadcn/ui components
- Relative date handling using the current server date

## Demo

https://ai-task-parser.vercel.app/

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- OpenAI SDK
- Zod

## How It Works

```txt
User input
  -> Next.js API route
  -> OpenAI structured output
  -> Zod-shaped task data
  -> Results panel
```

The OpenAI request runs in `app/api/parse-task/route.ts`, so the API key stays on the server and is not exposed to the browser.

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
| --- | --- |
| `OPENAI_API_KEY` | Server-side OpenAI API key used by the task parsing route |

Do not commit `.env.local`.

## AI-Assisted Workflow

I used AI coding tools as part of the development process to plan the component structure, review TypeScript/API flow, iterate on UI styling, and reason through the OpenAI integration step by step.

## Current Limitations

- Tasks are replaced on each new parse instead of stored as a persistent list.
- Parsed dates depend on the current server date and model interpretation.
- There is no database or authentication.
- Editing and deleting parsed tasks are not implemented yet.

## Next Steps

- Improve prompt quality for edge cases
- Add task editing/removal
- Add better priority styling
