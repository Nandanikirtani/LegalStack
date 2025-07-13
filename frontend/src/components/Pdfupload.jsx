import React, { useState } from "react";

const Pdfupload = () => {
  const [fileURL, setFileURL] = useState(null);

  const handleFile = () => {
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];

    if (file && file.type === "application/pdf") {
      const url = URL.createObjectURL(file);
      setFileURL(url);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="w-[60vh] h-[80vh] px-6 py-4 flex flex-col items-center bg-[#0f172a] text-white">
      <h1 className="font-bold text-xl mb-4">Upload your PDF file</h1>

      <input
        id="file"
        type="file"
        accept="application/pdf"
        className="border border-gray-300 rounded-lg px-4 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
      />

      <button
        onClick={handleFile}
        className="bg-yellow-500 px-6 py-2 rounded-2xl mt-4 text-black cursor-pointer"
      >
        Upload
      </button>

      {fileURL && (
        <div className="mt-6 w-full h-[500px]">
          <object
            data={fileURL}
            type="application/pdf"
            width="100%"
            height="100%"
            className="rounded-lg border"
          >
            <p>
              PDF preview is not supported on this device.{" "}
              <a
                href={fileURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Open in new tab
              </a>
            </p>
          </object>
        </div>
      )}
    </div>
  );
};

export default Pdfupload;
