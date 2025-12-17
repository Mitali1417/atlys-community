import { useState } from "react";
import type { Post } from "../../types/post";
import { NotImplementedModal } from "../shared/NotImplementedModal";
import { Card, CardContent } from "../ui/Card";
import { randomPostsData } from "../../utils/constants";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import { Button } from "../ui/Button";

export default function PostCard({ post }: { post: Post }) {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const { guard } = useRequireAuth();

  const [randomMeta] = useState(
    // eslint-disable-next-line react-hooks/purity
    randomPostsData[Math.floor(Math.random() * randomPostsData.length)]
  );

  const [likeCount] = useState(randomMeta.likes);
  const [commentCount] = useState(randomMeta.comments);

  const guardedAction = () =>
    guard(() => {
      setShowInfoModal(true);
    });

  return (
    <>
      <Card>
        <CardContent>
          <div>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <div className="relative">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="relative h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-secondary-foreground truncate">
                      {post.author.name}
                    </h3>
                    <span
                      className="inline-flex items-center justify-center w-4 h-4 p-1 bg-secondary rounded-full text-[10px] text-white"
                      title="Verified"
                    >
                      ✓
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span>{post.createdAt}</span>
                    <span className="text-xs">•</span>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">
                      Public
                    </span>
                  </p>
                </div>
              </div>

              <Button
                variant="ghost"
                onClick={guardedAction}
                className="text-muted-foreground/70 cursor-pointer hover:text-muted-foreground p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="More options"
              >
                <span className="text-lg">⋯</span>
              </Button>
            </div>
          </div>

          <div className="p-4">
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap mb-4">
              {post.content}
            </p>
            {randomMeta.tags && randomMeta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {randomMeta.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2.5 py-1 bg-blue-50 text-primary/80 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between text-sm text-muted-foreground pt-3 mt-4">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="flex items-center -space-x-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-linear-to-r from-red-500 to-pink-500 rounded-full">
                      🤍
                    </span>
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full">
                      👍
                    </span>
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full">
                      😄
                    </span>
                  </span>
                  <span>{likeCount}</span>
                </span>
                <button
                  onClick={guardedAction}
                  className="hover:text-secondary transition-colors"
                >
                  {commentCount} comment{commentCount !== 1 ? "s" : ""}
                </button>
                <button
                  onClick={guardedAction}
                  className="hover:text-secondary transition-colors"
                >
                  {randomMeta.shares} share{randomMeta.shares !== 1 ? "s" : ""}
                </button>
              </div>

              <button
                onClick={guardedAction}
                className="hover:text-secondary transition-colors"
              >
                {randomMeta.views} views
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <NotImplementedModal
        open={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        icon={"i"}
        title="Feature coming soon"
        description="This action isn’t implemented yet, but it’s part of the planned editor experience."
      />
    </>
  );
}
