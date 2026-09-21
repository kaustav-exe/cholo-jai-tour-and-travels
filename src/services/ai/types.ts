export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: number;
}

export interface ChatRequestPayload {
  messages: ChatMessage[];
  sessionId?: string;
  context?: {
    currentDestination?: string;
    currentPackageId?: string;
    travelMonth?: string;
    guestsCount?: number;
  };
}

export interface ChatResponsePayload {
  message: string;
  sessionId: string;
  usage: {
    tokensUsed: number;
    remainingQuota: number | 'unlimited';
  };
  suggestedPackages?: Array<{
    id: string;
    title: string;
    price: string;
  }>;
}

export interface VoiceSessionRequest {
  audioBlobBase64?: string;
  textTranscript?: string;
  sessionId?: string;
  language?: 'en' | 'bn' | 'hi';
}

export interface VoiceSessionResponse {
  audioResponseBase64?: string;
  textResponse: string;
  sessionId: string;
  voiceSecondsUsed: number;
  remainingMinutes: number | 'unlimited';
}
