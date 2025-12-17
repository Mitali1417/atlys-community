import PostEditor from "../components/feed/PostEditor";
import FeedList from "../components/feed/FeedList";
import { usePosts } from "../context/PostsContext";

export default function Feed() {
  const { posts, createPost } = usePosts();

  return (
    <main className="max-w-xl mx-auto mt-6 space-y-6">
      <PostEditor onPublish={createPost} />
      <FeedList posts={posts} />
    </main>
  );
}
