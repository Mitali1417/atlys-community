import type { Post } from "../../types/post";
import { DUMMY_POSTS } from "../../utils/constants";
import PostCard from "./PostCard";

export default function FeedList({ posts }: { posts: Post[] }) {
  const allPosts = [...posts, ...DUMMY_POSTS];

  return (
    <div className="mb-4 space-y-3">
      {allPosts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
