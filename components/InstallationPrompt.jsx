import { useRef, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

const InstallationPrompt = (props) => {
  const pwaInstallRef = useRef(null);

  useEffect(() => {
    import("@khmyznikov/pwa-install");
  });

  return (
    <>
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
    </>
  );
};

export default InstallationPrompt;
