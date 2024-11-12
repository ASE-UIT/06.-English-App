import React, { useState } from 'react';

interface VocabularyFormProps {
  onAddVocabulary: (term: string) => void;
}

const VocabularyForm: React.FC<VocabularyFormProps> = ({ onAddVocabulary }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      onAddVocabulary(term);
      setTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Thêm Từ Vựng</label>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Nhập từ vựng"
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default VocabularyForm;
