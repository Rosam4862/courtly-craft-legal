import { useEffect, useRef, useState } from "react";
import { Upload, ImageIcon } from "lucide-react";

interface Props {
  id: string;
  alt: string;
  className?: string;
  defaultSrc?: string;
  aspect?: string;
  rounded?: string;
}

export function UploadableImage({ id, alt, className = "", defaultSrc, aspect = "aspect-[4/3]", rounded = "rounded-xl" }: Props) {
  const key = `img:${id}`;
  const [src, setSrc] = useState<string | undefined>(defaultSrc);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(key);
    if (stored) setSrc(stored);
  }, [key]);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setSrc(result);
      try { localStorage.setItem(key, result); } catch {}
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`group relative overflow-hidden ${aspect} ${rounded} ${className} bg-gradient-navy cursor-pointer`}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        const f = e.dataTransfer.files?.[0];
        if (f) handleFile(f);
      }}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/70">
          <ImageIcon className="h-10 w-10" />
          <span className="text-xs uppercase tracking-widest">{alt}</span>
        </div>
      )}
      <div className={`absolute inset-0 flex items-center justify-center bg-navy-deep/60 opacity-0 transition-opacity ${dragOver ? "opacity-100" : "group-hover:opacity-100"}`}>
        <div className="flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-navy-deep">
          <Upload className="h-4 w-4" /> Upload image
        </div>
      </div>
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
    </div>
  );
}
