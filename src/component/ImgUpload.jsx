// import React, { useState } from 'react';

// const ImgUpload = ({ onFileSelect }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
  
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     onFileSelect(file);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       {selectedFile && <p>Selected file: {selectedFile.name}</p>}
//     </div>
//   );
// };

// export default ImgUpload;

import React, { useState } from 'react';

const ImgUpload = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
    >
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      <p>or Drag & Drop file here</p>
    </div>
  );
};

export default ImgUpload;
