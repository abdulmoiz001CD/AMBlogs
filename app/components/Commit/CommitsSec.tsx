'use client';

import React, { useState } from 'react';

interface Commit {
  id: number;
  message: string;
}

export default function CommitComponent() {
  const [commitMessage, setCommitMessage] = useState('');
  const [commitHistory, setCommitHistory] = useState<Commit[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommitMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (commitMessage.trim() !== '') {
      setCommitHistory([
        ...commitHistory,
        {
          id: Date.now(),
          message: commitMessage,
        },
      ]);
      setCommitMessage('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Commit</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter commit message"
            value={commitMessage}
            onChange={handleInputChange}
            className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-[#f1b419] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
          >
            Commit
          </button>
        </div>
      </form>

      <h2 className="text-xl font-bold mb-2">Commit History</h2>
<ul className="list-disc list-inside rounded-md border border-gray-300 shadow-md">
  {commitHistory.map((commit) => (
    <li key={commit.id} className="p-2 hover:bg-gray-100">
      {commit.message}
    </li>
  ))}
</ul>

    </div>
  );
}

