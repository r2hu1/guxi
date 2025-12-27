import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";

export type RepoForTweet = {
  name: string;
  fullName: string;
  description: string;
  topics: string[];
  language: string;
  stars: number;
  owner: string;
  url: string;
};

export async function generateTweet(repo: RepoForTweet, maxCharacters: number) {
  const openrouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY!,
  });

  const prompt = `
Write a single launch tweet under ${maxCharacters} characters.

Repo name: ${repo.name}
Description: ${repo.description}
Language: ${repo.language}
Topics: ${repo.topics.join(", ")}
Homepage: ${repo.url || "none"}

Rules:
- One tweet only
- No emoji spam
- No invented features
- Concise
  `;

  const { text } = await generateText({
    model: openrouter.chat("anthropic/claude-3.5-sonnet"),
    prompt,
    temperature: 0.6,
    maxOutputTokens: 120,
  });

  const trimmed = text.trim();

  if (trimmed.length > maxCharacters) {
    return trimmed.slice(0, maxCharacters - 1).trim();
  }

  return trimmed;
}
