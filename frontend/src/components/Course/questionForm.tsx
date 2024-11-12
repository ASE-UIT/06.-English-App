import React, { useState } from 'react';

interface QuestionFormProps {
  onAddQuestion: (questionType: string, content: string) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ onAddQuestion }) => {
  const [questionType, setQuestionType] = useState('true_false');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onAddQuestion(questionType, content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Chọn loại câu hỏi:</label>
      <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
        <option value="true_false">True/False</option>
        <option value="note_completion">Note Completion</option>
        <option value="multiple_choice">Multiple Choice</option>
        <option value="sentence_completion">Sentence Completion</option>
        <option value="matching">Matching</option>
      </select>

      <label>Nội dung câu hỏi:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Nhập nội dung câu hỏi"
      />

      <button type="submit">Thêm Câu Hỏi</button>
    </form>
  );
};

export default QuestionForm;
