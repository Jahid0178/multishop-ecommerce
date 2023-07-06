import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const useLoadingProgress = () => {
  const router = useRouter();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoadingProgress(10); // Set initial progress when a new route starts loading
    };

    const handleRouteChangeComplete = () => {
      setLoadingProgress(100); // Set progress to 100% when the route has finished loading
    };

    const handleRouteChangeError = () => {
      setLoadingProgress(0); // Set progress to 0% if there's an error while loading the route
    };

    const handleWindowLoad = () => {
      setLoadingProgress(100); // Set progress to 100% when the window finishes loading
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);
    window.addEventListener("load", handleWindowLoad);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, [router.events]);

  return loadingProgress;
};

export default useLoadingProgress;
