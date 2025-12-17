import { useState } from "react";
import { useRequireAuth } from "../../hooks/useRequireAuth";
import { Textarea } from "../ui/Textarea";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { EDITOR_TOOLS } from "../../utils/constants";
import { NotImplementedModal } from "../shared/NotImplementedModal";

export default function PostEditor({
  onPublish,
  isPublishing = false,
}: {
  onPublish: (t: string) => void;
  isPublishing?: boolean;
}) {
  const [text, setText] = useState("");
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const { guard } = useRequireAuth();

  const maxCharacters = 280;

  const guardedAction = () =>
    guard(() => {
      setShowInfoModal(true);
    });

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    setCharacterCount(newText.length);
    if (!isExpanded && newText.length > 0) {
      setIsExpanded(true);
    }
  };

  const handlePublish = () => {
    guard(() => {
      onPublish(text);
      setText("");
      setCharacterCount(0);
      setIsExpanded(false);
    });
  };

  const handleFocus = () => {
    guard(() => {});
    setIsExpanded(true);
  };

  return (
    <>
      <Card>
        <CardContent className={`p-0 ${isExpanded ? "min-h-[200px]" : ""}`}>
          {/* Editor Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 pb-2">
              <span className="text-lg" role="img" aria-label="write">
                ✍️
              </span>
              <h3 className="font-semibold text-lg">Create Post</h3>
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="aspect-square"
              aria-label={isExpanded ? "Collapse editor" : "Expand editor"}
            >
              <span className="text-xl">{isExpanded ? "−" : "+"}</span>
            </Button>
          </div>

          {isExpanded && (
            <>
              {/* Formatting Toolbar */}
              <div className=" border-b border-border/20">
                <div className="flex flex-wrap items-center gap-1">
                  {EDITOR_TOOLS.map(({ key, label, icon: Icon }) => (
                    <Button
                      key={key}
                      onClick={guardedAction}
                      title={label}
                      variant="ghost"
                      className="h-9 w-9 p-0 text-base hover:bg-background hover:shadow-sm transition-all"
                      aria-label={label}
                    >
                      <Icon />
                    </Button>
                  ))}
                </div>
              </div>

              <div className="p-4">
                <Textarea
                  placeholder="What's on your mind? Share your thoughts..."
                  value={text}
                  onFocus={handleFocus}
                  onChange={handleTextChange}
                  className="min-h-[120px] resize-none border-none text-base focus-visible:ring-0 p-0 placeholder:text-muted-foreground/70"
                  disabled={isPublishing}
                />
              </div>

              {/* Media & Action Buttons */}
              <div className="pt-4 border-t border-border/20 bg-background/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={guardedAction}
                      title="Add Media"
                      variant="outline"
                      className="h-10 px-3 gap-2 border-dashed hover:border-solid transition-all"
                      disabled={isPublishing}
                    >
                      <span className="text-lg">📷</span>
                    </Button>
                    <Button
                      onClick={guardedAction}
                      title="Audio"
                      variant="outline"
                      className="h-10 px-3 gap-2 border-dashed hover:border-solid transition-all"
                      disabled={isPublishing}
                    >
                      <span className="text-lg">🎵</span>
                    </Button>
                    <Button
                      onClick={guardedAction}
                      title="Video"
                      variant="outline"
                      className="h-10 px-3 gap-2 border-dashed hover:border-solid transition-all"
                      disabled={isPublishing}
                    >
                      <span className="text-lg">🎥</span>
                    </Button>
                  </div>

                  <Button
                    variant="default"
                    className="group pl-3 bg-foreground!"
                    onClick={handlePublish}
                    disabled={
                      isPublishing ||
                      text.length === 0 ||
                      characterCount > maxCharacters
                    }
                  >
                    {isPublishing ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                        Publishing...
                      </>
                    ) : (
                      <>
                        <span>Publish</span>
                        <span className=" group-hover:translate-x-0.5 -translate-x-0.5 transition-all duration-500 ease-in-out">
                          &#10148;
                        </span>
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </>
          )}

          {!isExpanded && (
            <div className="p-4">
              <button
                onClick={handleFocus}
                className="w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-lg">💭</span>
                  </div>
                  <div>
                    <p className="font-medium">Share your thoughts...</p>
                    <p className="text-sm text-muted-foreground">
                      Click to start writing
                    </p>
                  </div>
                </div>
              </button>
            </div>
          )}
        </CardContent>
      </Card>

      <NotImplementedModal
        open={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        icon="⚙️"
        title="Feature Coming Soon"
        description="This feature is currently under development. We're working hard to bring you the best editor experience!"
      />
    </>
  );
}
