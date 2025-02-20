import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Customize the loading bar
NProgress.configure({ showSpinner: false, speed: 500});

export default function LoadingBar({ isLoading }) {
  useEffect(() => {
    if (isLoading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isLoading]);

  return null; // This component just manages NProgress, no UI needed
}
    