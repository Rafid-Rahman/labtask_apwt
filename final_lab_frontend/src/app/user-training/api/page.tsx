import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const response = await axios.get('http://localhost:3000/user-training/all-trainings');
      const data = response.data;
      res.status(200).json(data);
    } else if (req.method === 'POST') {
      if (req.url === '/user-training/add-training') {
        // Add code to handle adding user training
        const { userId, progress, feedback, videoId } = req.body;

        try {
          const response = await axios.post('http://localhost:3000/user-training/add-training', {
            userId,
            progress,
            feedback,
            videoId,
          });

          res.status(200).json(response.data);
        } catch (error) {
          console.error('Error adding user training:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      } else if (req.url === '/user-training/add-training-video') {
        // Add code to handle adding training video
        const { videoFile } = req.body;

        try {
          const response = await axios.post('http://localhost:3000/user-training/add-training-video', {
            videoFile,
          });

          res.status(200).json(response.data);
        } catch (error) {
          console.error('Error adding training video:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      } else {
        res.status(404).json({ error: 'Not Found' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
