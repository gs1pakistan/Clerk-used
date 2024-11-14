// app/page.tsx
"use client";

import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = () => {
    if (inputText.trim() === '') {
      alert('Please enter some text or a URL');
      return;
    }
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;
    setQrCodeUrl(apiUrl);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-400 p-5">
      <div className="container max-w-sm bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-5">QR Code Generator</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text or URL"
          className="w-full p-3 text-lg border border-gray-300 rounded mb-5 focus:border-blue-500 outline-none transition"
        />
        <button
          onClick={generateQRCode}
          className="ui-btn w-full p-3 font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded transition"
        >
          <span>Generate QRCode</span>
        </button>
        {qrCodeUrl && (
          <div id="qrCodeContainer" className="mt-5">
            <img
              src={qrCodeUrl}
              alt="QR Code"
              className="w-36 h-36 mx-auto mt-3 rounded shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
