import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Post } from "../types/post";
import { useAuth } from "./AuthContex";

type PostsContextType = {
  posts: Post[];
  createPost: (content: string) => void;
};

const PostsContext = createContext<PostsContextType | null>(null);

const STORAGE_KEY = "atlys_posts";

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPosts(JSON.parse(stored));
      } catch {
        setPosts([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const createPost = (content: string) => {
    if (!user) return;

    const newPost: Post = {
      id: crypto.randomUUID(),
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      content,
      createdAt: new Date().toDateString(),
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <PostsContext.Provider value={{ posts, createPost }}>
      {children}
    </PostsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePosts() {
  const ctx = useContext(PostsContext);
  if (!ctx) {
    throw new Error("usePosts must be used inside PostsProvider");
  }
  return ctx;
}
