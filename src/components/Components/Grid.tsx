import React from 'react'
import {
  Grid,
  Box,
  Container,
  Typography,
  Paper,
  ButtonBase,
} from '@material-ui/core'

export default function GridDemo(): JSX.Element {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <SpacingDemo />
        {/* Fluid Grid */}
        {/* 1. Basic Grid */}
        <BasicGrid />
        {/* 2. Grid with breakpoints */}
        <GridWithBreakpoints />
        <AutoLayout />
        <ZeroMinWidthDemo />
        <ComplexGridDemo />
      </Grid>
    </Container>
  )
}

function SpacingDemo(): JSX.Element {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography variant="subtitle2" gutterBottom>
          spacing
        </Typography>
        <Box p={2} bgcolor="#f5f5f5">
          <Grid container justify="center" spacing={1}>
            <Grid item>
              <Box clone width={100} height={100}>
                <Paper>1</Paper>
              </Box>
            </Grid>
            <Grid item>
              <Box clone width={100} height={100}>
                <Paper>2</Paper>
              </Box>
            </Grid>
            <Grid item>
              <Box clone width={100} height={100}>
                <Paper>3</Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  )
}

function BasicGrid(): JSX.Element {
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="subtitle2" gutterBottom>
        Basic Grid
      </Typography>
      <Box p={2} bgcolor="#f5f5f5">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box p={2} bgcolor="background.paper" textAlign="center">
              Grid item xs=6
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={2} bgcolor="background.paper" textAlign="center">
              Grid item xs=6
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={2} bgcolor="background.paper" textAlign="center">
              Grid item xs=6
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

function GridWithBreakpoints(): JSX.Element {
  return (
    <Grid item xs={12} md={6}>
      <Typography variant="subtitle2" gutterBottom>
        Grid with breakpoints
      </Typography>
      <Box p={2} bgcolor="#f5f5f5">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box padding={2} bgcolor="background.paper" textAlign="center">
              Grid item xs=6
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box padding={2} bgcolor="background.paper" textAlign="center">
              Grid item xs=6 sm=3
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box padding={2} bgcolor="background.paper" textAlign="center">
              Grid item xs=6 sm=3
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

function AutoLayout(): JSX.Element {
  return (
    <Grid item xs md={6}>
      <Typography variant="subtitle2" gutterBottom>
        AutoLayout Grid
      </Typography>
      <Box px={1}>
        <Grid
          container
          spacing={2}
          wrap="nowrap"
          style={{ backgroundColor: '#f5f5f5' }}
        >
          <Grid item xs>
            <Box
              style={{ wordBreak: 'break-all' }}
              padding={2}
              bgcolor="background.paper"
              textAlign="center"
            >
              Grid xs
            </Box>
          </Grid>
          <Grid item xs={6} sm={9}>
            <Box
              style={{ wordBreak: 'break-all' }}
              padding={2}
              bgcolor="background.paper"
              textAlign="center"
            >
              Grid xs=6 sm=9
            </Box>
          </Grid>
          <Grid item xs>
            <Box
              style={{ wordBreak: 'break-all' }}
              padding={2}
              bgcolor="background.paper"
              textAlign="center"
            >
              Grid xs
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

function ZeroMinWidthDemo(): JSX.Element {
  return (
    <Grid item xs md={6}>
      <Typography variant="subtitle2" gutterBottom>
        ZeroMinWidth property
      </Typography>
      <Box px={1} bgcolor="#f5f5f5">
        <Grid container spacing={2} wrap="nowrap">
          <Grid item>
            <Typography>first item</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>
              Truncation should be conditionally applicable on this long line of
              text as this is a much longer line than what the container can
              support.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}

function ComplexGridDemo(): JSX.Element {
  return (
    <Grid item container xs md={6}>
      <Typography variant="subtitle2" gutterBottom>
        Complex Grid Demo
      </Typography>
      <Box clone p={2} width="100%">
        <Paper>
          <Grid container spacing={2}>
            <Grid item>
              <Box clone width={128} height={128}>
                <ButtonBase>
                  <Box clone width="100%" height="100%">
                    <img
                      src="https://material-ui.com/static/images/grid/complex.jpg"
                      alt=""
                    />
                  </Box>
                </ButtonBase>
              </Box>
            </Grid>
            <Grid item container xs={12} sm>
              <Grid item container xs direction="column">
                <Grid item xs>
                  <Typography variant="subtitle1">Standard License</Typography>
                  <Typography variant="body2">
                    Full resolution 1920x1080 • JPEG
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="button">Remove</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  )
}
