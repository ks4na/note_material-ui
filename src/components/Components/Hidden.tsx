import React from 'react'
import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  Hidden,
} from '@material-ui/core'

export default function HiddenDemo(): JSX.Element {
  return (
    <Box clone bgcolor="#f5f5f5">
      <Container maxWidth="md">
        <XXUpDemo />
        <XXDownDemo />
        <XXOnlyDemo />
      </Container>
    </Box>
  )
}

function XXUpDemo(): JSX.Element {
  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        Hidden xxUp
      </Typography>
      <Grid container spacing={1} style={{ padding: '20px 0' }}>
        <Hidden xsUp>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>xsUp</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>smUp</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>mdUp</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>lgUp</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden xlUp>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>xlUp</Paper>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </>
  )
}

function XXDownDemo(): JSX.Element {
  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        Hidden xxDown
      </Typography>
      <Grid container spacing={1} style={{ padding: '20px 0' }}>
        <Hidden xsDown>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>xsDown</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>smDown</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>mdDown</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden lgDown>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>lgDown</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden xlDown>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>xlDown</Paper>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </>
  )
}

function XXOnlyDemo(): JSX.Element {
  return (
    <>
      <Typography variant="subtitle1">Hidden xxOnly</Typography>
      <Grid container spacing={1} style={{ padding: '20px 0' }}>
        <Hidden only="xs">
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>xsOnly</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden only="sm">
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>smOnly</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden only="md">
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>mdOnly</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden only="lg">
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>lgOnly</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden only="xl">
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>xlOnly</Paper>
            </Box>
          </Grid>
        </Hidden>
        <Hidden only={['md', 'lg']}>
          <Grid item xs>
            <Box clone py={2} textAlign="center">
              <Paper>only={`['md', 'lg']`}</Paper>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </>
  )
}
