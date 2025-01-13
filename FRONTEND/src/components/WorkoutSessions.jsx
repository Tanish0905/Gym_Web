import { Box } from '@mui/material';

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <Box className="wrapper">
        {/* <h1>TOP WORKOUT SESSION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quisquam. Eaque alias, blanditiis quidem maiores illo unde ipsam!
        </p> */}
        <img src="/img5.jpg" alt="workout" />
      </Box>
      <Box className="wrapper">
        <h1>OUR FEATURES</h1>
        {/* <p>
          Group Fitness Classes
        </p> */}
        <Box className="bootcamps">
          <Box>
            <p>
              Group Fitness Classes
            </p>
          </Box>
          <Box>
            <p>
              Personal Training
            </p>
          </Box>
          <Box>
            <p>
              Cardio and Strength Zones
            </p>
          </Box>
          <Box>
            <p>
              Lockers and Showers
            </p>
          </Box>
           <Box>
            <p>
              Nutritional Guidance
            </p>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default WorkoutSessions;