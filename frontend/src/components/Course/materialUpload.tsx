import React, { useState } from 'react';

interface MaterialUploadProps {
  onUploadMaterial: (material: File) => void;
}

const MaterialUpload: React.FC<MaterialUploadProps> = ({ onUploadMaterial }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      onUploadMaterial(file);
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Upload Materials</label>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default MaterialUpload;
