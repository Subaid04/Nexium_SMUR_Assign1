import quotes from "../../data/quotes.json";
import { Card, CardContent } from "../components/ui/card";

export default function QuoteList({ topic }: { topic: keyof typeof quotes }) {
  const topicQuotes = quotes[topic];

  if (!topicQuotes) return <p>No quotes found for this topic.</p>;

  return (
    <div className="space-y-4">
      {topicQuotes.map((quote, index) => (
        <Card key={index} className="rounded-lg">
          <CardContent className="p-6 text-left text-sm sm:text-base">
            {quote}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
