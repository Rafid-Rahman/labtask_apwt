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

const Add_Training_Video = () => {
  const [userTrainings, setUserTrainings] = useState<UserTraining[]>([]);
  const [trainingVideos, setTrainingVideos] = useState<TrainingVideo[]>([]);
  const [newUserTraining, setNewUserTraining] = useState({
    userId: '',
    progress: '',
    feedback: '',
    videoId: '',
  });
  const [newTrainingVideo, setNewTrainingVideo] = useState({
    videoFile: '',
  });
  const handleTrainingVideoSubmit = async (event : React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/page/add-training-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTrainingVideo),
      });

      const data = await response.json();
      console.log(data); // Log the response from the server
    } catch (error) {
      console.error('Error adding training video:', error);
    }
  };

  return(
    <div>
        <h2>Add Training Video</h2>
      <form onSubmit={handleTrainingVideoSubmit}>
        <label>
          Video File:
          <input
            type="text"
            value={newTrainingVideo.videoFile}
            onChange={(e) => setNewTrainingVideo({ ...newTrainingVideo, videoFile: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Add Training Video</button>
      </form>
    </div>
  )
}
export default Add_Training_Video;