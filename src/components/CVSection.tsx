"use client";

import React from "react";

const CVSection = () => {
  const pdfUrl = "/image/safa-resume.pdf"; 

  return (
    <div>
      
      {/* Cv button */}

      <button
        onClick={() => window.open(pdfUrl, "_blank")}>
        View CV
      </button>
    </div>
  );
};

export default CVSection;
