// File: AppSidebar.tsx
import {
  Bot,
  MessageSquare,
  Zap,
  MessageSquarePlus,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Badge } from "@/components/ui/badge";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import {
  getSevenDaysChats,
  getTodaysChats,
  getYesterdaysChats,
} from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

// Dropdown menu imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";

interface IChat {
  id: string;
  title: string;
  created: string;
}

export function AppSidebar() {
  const [recentChats, setRecentChats] = useState<IChat[]>([]);
  const [yesterdaysChats, setYesterdaysChat] = useState<IChat[]>([]);
  const [sevenDaysChats, setSevenDaysChat] = useState<IChat[]>([]);
  const { user, signOut } = useAuth();
  const token = localStorage.getItem("access_token") || "";

  // ⏰ IST Clock
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      };
      setTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function fetchChats() {
      if (!token) {
        setRecentChats([]);
        setYesterdaysChat([]);
        setSevenDaysChat([]);
        return;
      }
      try {
        const today = await getTodaysChats(token);
        setRecentChats(today || []);
        const yesterday = await getYesterdaysChats(token);
        setYesterdaysChat(yesterday || []);
        const seven = await getSevenDaysChats(token);
        setSevenDaysChat(seven || []);
      } catch {
        setRecentChats([]);
        setYesterdaysChat([]);
        setSevenDaysChat([]);
      }
    }
    fetchChats();
  }, [token, user]);

  // Clear chats on logout
  const handleLogout = () => {
    setRecentChats([]);
    setYesterdaysChat([]);
    setSevenDaysChat([]);
    signOut();
  };

  const handleShare = (chat: IChat) => {
    const url = `${window.location.origin}/chats/${chat.id}`;
    navigator.clipboard.writeText(url);
    alert(`Chat link copied: ${url}`);
  };

  const handleDelete = (chat: IChat) => {
    setRecentChats((prev) => prev.filter((c) => c.id !== chat.id));
    setYesterdaysChat((prev) => prev.filter((c) => c.id !== chat.id));
    setSevenDaysChat((prev) => prev.filter((c) => c.id !== chat.id));
  };

  const renderChatItem = (chat: IChat) => (
    <SidebarMenuItem key={chat.id}>
      <div className="flex justify-between items-center">
        <NavLink to={`chats/${chat.id}`} className="flex-1">
          {({ isActive }) => (
            <SidebarMenuButton
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-md transition cursor-pointer",
                isActive ? "bg-muted" : "hover:bg-muted"
              )}
            >
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm truncate">
                {chat.title[0] === "'" || chat.title[0] === '"'
                  ? chat.title.slice(1, -1)
                  : chat.title}
              </span>
            </SidebarMenuButton>
          )}
        </NavLink>
      </div>
    </SidebarMenuItem>
  );

  return (
    <Sidebar className="bg-background text-foreground border-r">
      <SidebarContent className="flex flex-col justify-between h-full">
        <div>
          {/* ⏰ IST Clock */}
          <SidebarGroup>
            <SidebarGroupLabel className="flex justify-center items-center text-lg font-bold px-4 pt-4 pb-2">
              🕒 {time} IST
            </SidebarGroupLabel>
          </SidebarGroup>

          {/* New Chat */}
          <div className="px-4 pt-4 flex gap-2">
            <Button
              variant="secondary"
              className="w-full justify-start cursor-pointer gap-2"
              asChild
            >
              <Link to="/chats/new">
                <MessageSquarePlus className="w-4 h-4" />
                New Chat
              </Link>
            </Button>
          </div>

          {/* Recent Chats */}
          {recentChats.length > 0 && (
            <SidebarGroup className="mt-6">
              <SidebarGroupLabel className="text-xs text-muted-foreground uppercase px-4 pb-2">
                Recent Chats
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>{recentChats.map(renderChatItem)}</SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {/* Yesterday */}
          {yesterdaysChats.length > 0 && (
            <SidebarGroup className="mt-6">
              <SidebarGroupLabel className="text-xs text-muted-foreground uppercase px-4 pb-2">
                Yesterday
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>{yesterdaysChats.map(renderChatItem)}</SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {/* Last 7 Days */}
          {sevenDaysChats.length > 0 && (
            <SidebarGroup className="mt-6">
              <SidebarGroupLabel className="text-xs text-muted-foreground uppercase px-4 pb-2">
                Last 7 Days
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>{sevenDaysChats.map(renderChatItem)}</SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {/* About */}
          <SidebarGroup className="mt-6">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/about"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-muted rounded-md transition"
                  >
                    <Bot className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-semibold">About</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </div>

        {/* Feedback Button */}
        <div className="p-4 border-t flex flex-col gap-2">
          <a
            href="https://forms.gle/67Aq2qoPTTmUXeYEA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition font-semibold text-base"
          >
            📝 Feedback
          </a>
          <Link
            to="/about-me"
            className="flex items-center justify-between bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <Zap className="w-4 h-4" />
              Developer
            </span>
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">
              Check
            </Badge>
          </Link>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
