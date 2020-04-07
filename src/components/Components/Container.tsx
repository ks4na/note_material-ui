import React from 'react'

import { Container, Box, Typography } from '@material-ui/core'

export default function ContainerDemo(): JSX.Element {
  return (
    <Container disableGutters>
      <Typography component="h3">Mui Container</Typography>
      <Container>
        <Box minHeight={100} bgcolor="success.main">
          this is a Box in Container
        </Box>
      </Container>
      <Typography component="h3">
        Mui Container fixed=&quot;true&quot;
      </Typography>
      <Container fixed>
        <Box minHeight={100} bgcolor="success.main">
          this is a Box in Container
        </Box>
      </Container>
      <Typography component="h3">
        Mui Container maxWidth=&quot;sm&quot;
      </Typography>
      <Container maxWidth="sm">
        <Box minHeight={100} bgcolor="success.main">
          this is a Box in Container
        </Box>
      </Container>
      <Typography component="h3">
        Mui Container maxWidth=&quot;md&quot; fixed=&quot;true&quot;
      </Typography>
      <Container maxWidth="md" fixed>
        <Box minHeight={100} bgcolor="success.main">
          this is a Box in Container
        </Box>
      </Container>
    </Container>
  )
}
