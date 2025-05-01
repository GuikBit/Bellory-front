import { useEffect, useState } from "react";

export const useInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const promptInstall = async () => {
    if (!deferredPrompt) return;
    // @ts-ignore
    await deferredPrompt.prompt();
    // @ts-ignore
    const result = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    return result;
  };

  return { canInstall: !!deferredPrompt, promptInstall };
};
