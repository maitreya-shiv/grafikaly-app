import { useState } from 'react'
import './App.css'
import { Box, Typography } from '@mui/material';
import HomeCards from './components/HomeCards';
import SkillCharts from './components/SkillCharts';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className='app-content'>
      <Box className='app-content-home'>
        <Box className='app-content-home-left'>
          <Box className='app-content-home-left-content'>
            <Typography sx={{ mt: 11, ml: 7, color: '#492d31', fontSize: '3em' }}>
              We are
            </Typography>
            <Typography sx={{ mt: 5, ml: 7, color: '#f37b83', fontSize: '6em', fontWeight: 'bold' }}>
              GRAFIKALY
            </Typography>
            <Typography sx={{ mt: 9, ml: 7, pr: 7, color: '#a88590', fontSize: '1.5em' }}>
              A company dedicated to disrupting the status quo and building innovative solutions.
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          backgroundImage: 'url("home.png")', // Replace with your image path
          backgroundSize: 'cover', // Adjust as needed (contain, 100% 100%, etc.)
          backgroundRepeat: 'no-repeat',
        }} className='app-content-home-right'>
        </Box>
      </Box>
      <Box className='app-content-services'>
        <Box className='app-content-services-left-content'>
          <HomeCards />
        </Box>
        <Box className='app-content-services-right-content'>
          <Typography sx={{ mt: 7, ml: 7, color: '#f37b83', fontSize: '3em', fontWeight: 'bold' }}>
            Our Services
          </Typography>
          <Typography sx={{ mt: 7, ml: 7, pr: 7, color: '#a88590', fontSize: '1.5em' }}>
            A company dedicated to disrupting the status quo and building innovative solutions.
          </Typography>
        </Box>
      </Box>
      <Box className='app-content-skills'>
        <Box className='app-content-skills-left-content'>
          <SkillCharts />
        </Box>
        <Box className='app-content-skills-right-content'>
          <Typography sx={{ mt: 7, ml: 7, color: '#f37b83', fontSize: '3em', fontWeight: 'bold' }}>
            Our Skills
          </Typography>
          <Typography sx={{ mt: 7, ml: 7, pr: 7, color: '#a88590', fontSize: '1.5em' }}>
            A company dedicated to disrupting the status quo and building innovative solutions.
          </Typography>
        </Box>
      </Box>
      <Box className='app-content-contact'>
        <Box className='app-content-contact-left-content'>
          <Typography sx={{ mt: 7, ml: 7, color: '#f37b83', fontSize: '3em', fontWeight: 'bold' }}>
            Get in touch
          </Typography>
          <Typography sx={{ mt: 5, ml: 7, pr: 7, color: '#a88590', fontSize: '1.5em' }}>
            A company dedicated to disrupting the status quo and building innovative solutions.
          </Typography>
        </Box>
        <Box className='app-content-contact-right-content'>
          <Typography sx={{ mt: 10, ml: 7, color: '#f37b83', fontSize: '2em', fontWeight: 'bold' }}>
            Email
          </Typography>
          <Typography sx={{ mt: 2, ml: 7, pr: 7, color: '#a88590', fontSize: '1.5em' }}>
            grafikaly@example.com
          </Typography>
          <Typography sx={{ mt: 9, ml: 7, color: '#f37b83', fontSize: '2em', fontWeight: 'bold' }}>
            Facebook
          </Typography>
          <Typography sx={{ mt: 2, ml: 7, pr: 7, color: '#a88590', fontSize: '1.5em' }}>
            grafikaly@example.com
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default App
