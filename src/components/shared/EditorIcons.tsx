type IconProps = { className?: string };

export const BoldIcon = ({ className }: IconProps) => (
  <span className={className}>B</span>
);

export const ItalicIcon = ({ className }: IconProps) => (
  <span className={className}>I</span>
);

export const UnderlineIcon = ({ className }: IconProps) => (
  <span className={className}>U</span>
);

export const BulletIcon = ({ className }: IconProps) => (
  <span className={className}>•</span>
);

export const NumberIcon = ({ className }: IconProps) => (
  <span className={className}>1.</span>
);

export const QuoteIcon = ({ className }: IconProps) => (
  <span className={className}>"</span>
);

export const LinkIcon = ({ className }: IconProps) => (
  <span className={className}>🔗</span>
);

export const ImageIcon = ({ className }: IconProps) => (
  <span className={className}>🖼</span>
);

export const ParagraphIcon = ({ className }: IconProps) => (
  <span className={className}>¶</span>
);
export const EmojiIcon = ({ className }: IconProps) => (
  <span className={className}>&#9786;</span>
);
