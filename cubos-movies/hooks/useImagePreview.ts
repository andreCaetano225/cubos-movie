import { useState } from "react";

type UseImagePreviewReturn = {
  preview: string | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
};

export const useImagePreview = (): UseImagePreviewReturn => {
  const [preview, setPreview] = useState<string | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const clear = () => {
    setPreview(null);
  };

  return { preview, onFileChange, clear };
};
