import {
  BoldIcon,
  BulletIcon,
  EmojiIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  NumberIcon,
  ParagraphIcon,
  QuoteIcon,
  UnderlineIcon,
} from "../components/shared/EditorIcons";
import type { Post } from "../types/post";

export const EDITOR_TOOLS = [
  {
    key: "paragraph",
    label: "Paragraph",
    icon: ParagraphIcon,
  },
  {
    key: "bold",
    label: "Bold",
    icon: BoldIcon,
    className: "font-bold",
  },
  {
    key: "italic",
    label: "Italic",
    icon: ItalicIcon,
    className: "italic",
  },
  {
    key: "underline",
    label: "Underline",
    icon: UnderlineIcon,
    className: "underline",
  },
  {
    key: "bullet",
    label: "Bulleted list",
    icon: BulletIcon,
  },
  {
    key: "number",
    label: "Numbered list",
    icon: NumberIcon,
  },
  {
    key: "quote",
    label: "Quote",
    icon: QuoteIcon,
  },
  {
    key: "link",
    label: "Insert link",
    icon: LinkIcon,
  },
  {
    key: "image",
    label: "Insert image",
    icon: ImageIcon,
  },
  {
    key: "emoji",
    label: "Insert emoji",
    icon: EmojiIcon,
  },
] as const;

export const randomPostsData = [
  {
    likes: 345,
    comments: 58,
    shares: 27,
    views: 1950,
    tags: ["desert", "sanddunes", "sun", "wanderlust"],
  },
  {
    likes: 267,
    comments: 41,
    shares: 21,
    views: 1630,
    tags: ["streetfood", "spicy", "local", "culture"],
  },
  {
    likes: 412,
    comments: 72,
    shares: 38,
    views: 2450,
    tags: ["rainforest", "jungle", "tropical", "biodiversity"],
  },
  {
    likes: 198,
    comments: 36,
    shares: 14,
    views: 1020,
    tags: ["coffee", "cafe", "brew", "morning"],
  },
  {
    likes: 289,
    comments: 47,
    shares: 22,
    views: 1560,
    tags: ["lake", "reflection", "peaceful", "serenity"],
  },
  {
    likes: 376,
    comments: 61,
    shares: 29,
    views: 2100,
    tags: ["bbq", "grill", "summer", "outdoor"],
  },
];

export const DUMMY_POSTS: Post[] = [
  {
    id: "1",
    author: {
      name: "Mary Johnson",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    content: "Morning hikes are my therapy 🌄 Nothing beats fresh air.",
    createdAt: "2h ago",
  },
  {
    id: "2",
    author: {
      name: "Alex Turner",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    content: "Just finished a deep React refactor. Feels clean ✨",
    createdAt: "5h ago",
  },
  {
    id: "3",
    author: {
      name: "Sophia Lee",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    content: "Coffee + code = perfect evening ☕💻",
    createdAt: "1d ago",
  },
];
