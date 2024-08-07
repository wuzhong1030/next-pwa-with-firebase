import { useRef, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
import useUserAgent from "@/hooks/useUserAgent";

const InstallationPrompt = (props) => {
  const pwaInstallRef = useRef(null);
  const { isStandalone } = useUserAgent();

  useEffect(() => {
    import("@khmyznikov/pwa-install").then(() => {
      // pwaInstallRef.current?.showDialog(true)
    });
  });

  const logMessage = (message) => {
    console.log(message);
    document.getElementById("events-area").value += `>: ${message}\r\n`;
  };

  useEffect(() => {
    if (pwaInstallRef.current) {
      const pwaInstall = pwaInstallRef.current;
      pwaInstall.addEventListener("pwa-install-success-event", (event) => {
        logMessage(event.detail.message);
      });
      pwaInstall.addEventListener("pwa-install-fail-event", (event) => {
        logMessage(event.detail.message);
      });
      pwaInstall.addEventListener("pwa-user-choice-result-event", (event) => {
        logMessage(event.detail.message);
      });
      pwaInstall.addEventListener("pwa-install-available-event", (event) => {
        logMessage(event.detail.message);
      });
      pwaInstall.addEventListener("pwa-install-how-to-event", (event) => {
        logMessage(event.detail.message);
      });
      pwaInstall.addEventListener("pwa-install-gallery-event", (event) => {
        logMessage(event.detail.message);
      });
    }
  }, []);

  return (
    // <div className={`${!isStandalone ? "block" : "hidden"}`}>
    <div>
      <pwa-install
        ref={pwaInstallRef}
        manifest-url="/manifest.json"
        description={`Install ${siteConfig.name} to your device.`}
      ></pwa-install>
      <button
        className={`text-xs items-center bg-[#f79e5d] text-zinc-800 font-semibold rounded flex gap-1 px-2 py-1.5 `}
        onClick={() => pwaInstallRef.current?.showDialog(true)}
      >
        Instructions
      </button>
      <textarea readonly id="events-area" rows="10"></textarea>
    </div>
  );
};

export default InstallationPrompt;
