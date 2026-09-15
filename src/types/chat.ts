/** A single chat message in the conversation. */
export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: number;
  /** Set when an assistant message failed to generate. */
  error?: boolean;
}

/** Request body sent from the client to the /api/chat serverless function. */
export interface ChatRequestBody {
  /** Full conversation history, oldest first, excluding the pending assistant reply. */
  messages: Array<{ role: "user" | "assistant"; content: string }>;
}

/** Successful response body from /api/chat. */
export interface ChatResponseBody {
  reply: string;
}

/** Error response body from /api/chat. */
export interface ChatErrorBody {
  error: string;
}
