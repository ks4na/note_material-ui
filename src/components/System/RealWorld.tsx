import React from 'react'
import { Box, Paper, Button, Typography, Grid, Avatar } from '@material-ui/core'
import SignalWifiOffIcon from '@material-ui/icons/SignalWifiOff'

export default function Banner(): JSX.Element {
  return (
    <Box clone p={2} maxWidth={500} marginX="auto">
      <Paper elevation={0}>
        <Grid container spacing={2} alignItems="center" wrap="nowrap">
          <Grid item>
            <Box bgcolor="primary.main" clone>
              <Avatar>
                <SignalWifiOffIcon />
              </Avatar>
            </Box>
          </Grid>
          <Grid item>
            <Typography>
              You have lost connection to the internet. This app is offline.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="flex-end" spacing={2}>
          <Button color="primary">Turn on wifi</Button>
        </Grid>
      </Paper>
    </Box>
  )
}
