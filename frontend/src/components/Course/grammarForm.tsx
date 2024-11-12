import React, { useState } from 'react';

interface GrammarFormProps {
  onAddGrammar: (rule: string) => void;
}

const GrammarForm: React.FC<GrammarFormProps> = ({ onAddGrammar }) => {
  const [rule, setRule] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rule.trim()) {
      onAddGrammar(rule);
      setRule('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Thêm Ngữ Pháp</label>
      <input
        type="text"
        value={rule}
        onChange={(e) => setRule(e.target.value)}
        placeholder="Nhập ngữ pháp"
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default GrammarForm;
