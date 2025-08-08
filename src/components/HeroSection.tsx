import React from 'react';
import { Download } from 'lucide-react';

// ✅ Define Type for Button
interface DownloadButton {
  label: string;
  href: string;
}

const DownloadPage: React.FC = () => {
  // ✅ Safe, generic, policy-compliant game links
  const buttons: DownloadButton[] = [
    { label: 'Download 3 Patti Dragon Tiger', href: 'https://3pattirs.net/?from_gameid=5129078&channelCode=5128469' },
    { label: 'Download 3 Patti Dragon Tiger Club', href: 'https://3pattirs.net/?from_gameid=5712912&channelCode=5129078' },
    { label: 'Download 3 Patti DTC', href: 'https://3pattirs.net/?from_gameid=5129601&channelCode=5129078' },
    { label: 'Download 3 Patti RS', href: 'https://3pattirs.net/?from_gameid=5712912&channelCode=5129078' },
    { label: 'Download New 3 Patti Game', href: 'https://3pattirs.net/?from_gameid=5129601&channelCode=5129078' },
    { label: 'Download Best 3 Patti ', href: 'https://3pattirs.net/?from_gameid=5129078&channelCode=5128469' },
    { label: 'Download New teen Patti game', href: 'https://3pattirs.net/?from_gameid=5712912&channelCode=5129078' },
    { label: 'Download Top 3 Patti ', href: 'https://3pattirs.net/?from_gameid=5129601&channelCode=5129078' },
    { label: 'Download 3 Patti 100k Win', href: 'https://3pattirs.net/?from_gameid=5129078&channelCode=5128469' },
    { label: 'Download 3 Patti Big Win', href: 'https://3pattirs.net/?from_gameid=5712912&channelCode=5129078' },
  ];

  const greenGradient =
    'bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-600 hover:to-emerald-700';

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-6">
      
      {/* ✅ New Caption Image at Top */}
      <div className="w-full max-w-2xl mb-6">
        <img
          src="/Capture.PNG"
          alt="Caption"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* ✅ Urdu Header Instruction Image */}
      <div className="w-full max-w-2xl mb-6">
        <img
          src="/632edcdd-a1d6-4bfb-8a71-c38dfde920b0.png"
          alt="Urdu Instructions"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* ✅ First 4 Buttons */}
      <div className="w-full max-w-md space-y-4 mb-10">
        {buttons.slice(0, 4).map(({ label, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex w-full items-center justify-center gap-3 ${greenGradient} text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300`}
          >
            <Download size={16} />
            {label}
          </a>
        ))}
      </div>

      {/* ✅ Urdu Note Instruction Image */}
      <div className="w-full max-w-3xl mb-10 mx-auto">
        <img
          src="/01370601-027a-4f93-9470-863f8c3de3a9.png"
          alt="Game Note in Urdu"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* ✅ Remaining Download Buttons */}
      <div className="w-full max-w-md space-y-4 mx-auto mb-10">
        {buttons.slice(4).map(({ label, href }, index) => (
          <a
            key={index + 4}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex w-full items-center justify-center gap-3 ${greenGradient} text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg transition duration-300`}
          >
            <Download size={16} />
            {label}
          </a>
        ))}
      </div>

      {/* ✅ Urdu Invite & Share Image */}
      <div className="w-full max-w-3xl mb-10 mx-auto">
        <img
          src="/8aec91bd-2fba-4e10-ba3a-4d778792f9f0.png"
          alt="Invite & Share Instructions"
          className="w-full h-auto rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default DownloadPage;


