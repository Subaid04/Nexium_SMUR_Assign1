"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../components/ui/select";

interface Props {
  onSearch: (topic: string) => void;
}

const topics = [
  "Success",
  "Failure",
  "Life",
  "Love",
  "Motivation",
  "Learning",
  "Leadership",
  "Creativity",
  "Perseverance",
  "Courage",
  "Teamwork",
];

export default function QuoteForm({ onSearch }: Props) {
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTopic) onSearch(selectedTopic.toLowerCase());
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Select onValueChange={setSelectedTopic}>
          <SelectTrigger
            tabIndex={0}
            className="w-full sm:w-64 h-10 rounded-lg border border-neutral-300 bg-white text-black dark:bg-zinc-800 dark:text-white dark:border-zinc-700 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500 transition"
          >
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>

          <SelectContent className="bg-white text-black dark:bg-zinc-800 dark:text-white rounded-md shadow-lg">
            {topics.map((topic) => (
              <SelectItem
                key={topic}
                value={topic}
                className="cursor-pointer px-3 py-2 rounded transition-colors
                  focus:bg-white focus:text-black
                  data-[state=checked]:bg-white data-[state=checked]:text-black
                  hover:bg-gray-100 dark:hover:bg-zinc-700"
              >
                {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          type="submit"
          className="h-10 px-5 rounded-lg bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition"
        >
          Get Quotes
        </Button>
      </form>
    </div>
  );
}
