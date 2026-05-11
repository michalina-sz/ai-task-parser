# AI Task Parser

AI Task Parser is a small portfolio project built with Next.js and the OpenAI API. It converts natural language task descriptions into structured task data.

The user can enter a short text describing one or more tasks, and the application returns parsed tasks with available details such as type, priority, date, and time.

## Features

- Natural language task input
- Server-side OpenAI API integration
- Structured output validated with Zod
- Loading and error states
- Dark UI built with Tailwind CSS and shadcn/ui
- Relative date handling based on the current server date

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
  -> Zod-validated task data
  -> Results panel
