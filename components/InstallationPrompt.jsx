import { useRef, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
import useUserAgent from "@/hooks/useUserAgent";

const InstallationPrompt = (props) => {
  const pwaInstallRef = useRef(null);
  const { isStandalone } = useUserAgent();

  useEffect(() => {
    import("@khmyznikov/pwa-install").then(() => {
        pwaInstallRef.current?.showDialog(true)
    })
  });

  return (
    <div className={`${!isStandalone ? "block" : "hidden"}`}>
      <pwa-install
        ref={pwaInstallRef}
        manifest-url="/manifest.json"
        manual-apple="true"
        manual-chrome="true"
        description={`Install ${siteConfig.name} to your device.`}
      ></pwa-install>
      <button
        className={`text-xs items-center bg-[#f79e5d] text-zinc-800 font-semibold rounded flex gap-1 px-2 py-1.5 `}
        onClick={() => pwaInstallRef.current?.showDialog(true)}
      >
        Instructions
      </button>
    </div>
  );
};

export default InstallationPrompt;
