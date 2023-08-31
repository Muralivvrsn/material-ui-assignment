import { Box, Typography, Avatar, Grid } from '@mui/material';

function TopSection() {
  return (
    <Box
      style={{
        width: '70%',
        margin: '100px auto',
        padding: '20px',
        background:"transparent"
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Avatar alt="LOGO" src="/path/to/logo.png" />
        </Grid>
        <Grid item>
          <Typography variant="h4">|</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h4">Weekly Governance Votes</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">|</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">14-20/June</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}




export default TopSection;