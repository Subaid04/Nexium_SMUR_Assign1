"use client";

import { useState } from "react";
import QuoteForm from "./components/QuoteForm";
import QuoteList from "./components/QuoteList";
import quotes from "../data/quotes.json";

type Topic = keyof typeof quotes;

export default function Home() {
  const [topic, setTopic] = useState<string>("");

  const isValidTopic = (topic: string): topic is Topic => topic in quotes;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-slate-50 to-slate-200 dark:from-black dark:to-zinc-900 text-foreground">
      <div className="w-full max-w-2xl space-y-8 text-center rounded-2xl bg-white dark:bg-zinc-950 p-6 shadow-md">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Quote Generator
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Enter a topic like <code>success</code>, <code>love</code>, or{" "}
            <code>life</code> to get 3 quotes.
          </p>
        </div>

        {/* Form */}
        <QuoteForm onSearch={(newTopic) => setTopic(newTopic)} />

        {/* Results */}
        {isValidTopic(topic) && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold capitalize">
              Quotes about {topic}
            </h2>
            <QuoteList topic={topic} />
          </section>
        )}

        {/* Footer */}
        <footer className="pt-10 text-xs text-muted-foreground">
          Built with ❤️ using <strong>Next.js</strong>,{" "}
          <strong>Tailwind</strong> & <strong>ShadCN UI</strong>
        </footer>
      </div>
    </main>
  );
}
