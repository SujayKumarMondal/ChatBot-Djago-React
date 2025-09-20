import axios, { AxiosError } from "axios";

const BASE_URL = "http://127.0.0.1:7004";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Utility function for handling errors
function handleError(err: unknown): never {
  if (axios.isAxiosError(err)) {
    const axiosError = err as AxiosError;
    throw new Error(
      axiosError.response?.data
        ? JSON.stringify(axiosError.response.data)
        : axiosError.message
    );
  } else if (err instanceof Error) {
    throw new Error(err.message);
  }
  throw new Error("An unknown error occurred!");
}

// 🔹 Prompt GPT
export async function promptGPT(data: { chat_id: string; content: string }, token: string) {
  try {
    const response = await api.post("/prompt_gpt/", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err: unknown) {
    handleError(err);
  }
}

// 🔹 Get messages of a chat
export async function getChatMessages(chatId: string, token: string) {
  if (!chatId) return [];
  try {
    const response = await api.get(`/get_chat_messages/${chatId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err: unknown) {
    handleError(err);
  }
}

// 🔹 Today's chats
export async function getTodaysChats(token: string) {
  try {
    const response = await api.get("/todays_chat/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err: unknown) {
    handleError(err);
  }
}

// 🔹 Yesterday's chats
export async function getYesterdaysChats(token: string) {
  try {
    const response = await api.get("/yesterdays_chat/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err: unknown) {
    handleError(err);
  }
}

// 🔹 Last 7 days chats
export async function getSevenDaysChats(token: string) {
  try {
    const response = await api.get("/seven_days_chat/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err: unknown) {
    handleError(err);
  }
}
