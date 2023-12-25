"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


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

const All_Trainings = () => {
  const router = useRouter();
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

  useEffect(() => {
    const fetchUserTrainings = async () => {
      try {
        const response = await fetch('/api/page/all-trainings');
        const data = await response.json();
        setUserTrainings(data);
      } catch (error) {
        console.error('Error fetching user trainings:', error);
      }
    };
    fetchUserTrainings();
  }, []);

  return (
    <div>
        <h1>User Trainings</h1>
      <ul>
        {userTrainings.map((training) => (
          <li key={training.id}>
            <p>User ID: {training.userId}</p>
            <p>Progress: {training.progress}</p>
            <p>Feedback: {training.feedback}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => router.push('/user-training/add-training')}>Add Training</button>
      <button onClick={() => router.push('/user-training/add-training-video')}>Add Training Video</button>
    </div>
  )
}
export default All_Trainings;