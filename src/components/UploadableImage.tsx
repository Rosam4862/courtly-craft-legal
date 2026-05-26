import { ImageIcon } from "lucide-react";

interface Props {
  id: string;
  alt: string;
  className?: string;
  defaultSrc?: string;
  aspect?: string;
  rounded?: string;
}

// Passive image display block. Renders defaultSrc if provided, otherwise a
// branded placeholder. Layout stays intact when images are swapped in later.
export function UploadableImage({ id: _id, alt, className = "", defaultSrc, aspect = "aspect-[4/3]", rounded = "rounded-xl" }: Props) {
  return (
    <div className={`relative overflow-hidden ${aspect} ${rounded} ${className} bg-gradient-navy`}>
      {defaultSrc ? (
        <img src={defaultSrc} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/70">
          <ImageIcon className="h-10 w-10" />
          <span className="px-4 text-center text-xs uppercase tracking-widest">{alt}</span>
        </div>
      )}
    </div>
  );
}
