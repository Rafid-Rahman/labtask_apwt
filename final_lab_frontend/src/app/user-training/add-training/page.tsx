"use client"
import React, { useState, useEffect } from 'react';

interface UserTraining {
    id: number;
    userId: number;
    progress: number;
    feedback: string;
  }
  
  interface TrainingVideo {
    id: number;
    videoFile: string;
  }

const Add_Training = () => {
  const [userTrainings, setUserTrainings] = useState<UserTraining[]>([]);
  const [trainingVideos, setTrainingVideos] = useState<TrainingVideo[]>([]);
  const [newUserTraining, setNewUserTraining] = useState({
    userId: '',
    progress: '',
    feedback: '',
    videoId: '',
  });
  const handleUserTrainingSubmit = async (event : React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/page/add-training', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserTraining),
      });

      const data = await response.json();
      console.log(data); // Log the response from the server
    } catch (error) {
      console.error('Error adding user training:', error);
    }
  };

  return (
    <div>
        <h2>Add User Training</h2>
      <form onSubmit={handleUserTrainingSubmit}>
        <label>
          User ID:
          <input
            type="number"
            value={newUserTraining.userId}
            onChange={(e) => setNewUserTraining({ ...newUserTraining, userId: e.target.value })}
          />
        </label>
        <br />
        <label>
          Progress:
          <input
            type="number"
            value={newUserTraining.progress}
            onChange={(e) => setNewUserTraining({ ...newUserTraining, progress: e.target.value })}
          />
        </label>
        <br />
        <label>
          Feedback:
          <input
            type="text"
            value={newUserTraining.feedback}
            onChange={(e) => setNewUserTraining({ ...newUserTraining, feedback: e.target.value })}
          />
        </label>
        <br />
        <label>
          Video ID:
          <input
            type="number"
            value={newUserTraining.videoId}
            onChange={(e) => setNewUserTraining({ ...newUserTraining, videoId: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Add User Training</button>
      </form>
    </div>
  )

}
export default Add_Training;