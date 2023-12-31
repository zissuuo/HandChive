import React, { useState } from 'react';

const ImgUpload = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);

    // 이미지 미리보기 생성
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewURL('');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    onFileSelect(file);

    // 이미지 미리보기 생성
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewURL('');
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ border: '0px dashed #ccc', padding: '50px', textAlign: 'center', justifyContent: 'center' }}
    >
      <input type="file" onChange={handleFileChange} />
      {previewURL && <img src={previewURL} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '20px' }} />}
    </div>
  );
};

export default ImgUpload;
