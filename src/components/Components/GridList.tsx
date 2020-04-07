import React from 'react'
import getTiles from './tileData'

import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Container,
  Box,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import StarBorderIcon from '@material-ui/icons/StarBorder'

export default function GridListDemo(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <GridListBasic />
      <GridListWithTitleBars />
      <InlineGridList />
    </Container>
  )
}

function GridListBasic(): JSX.Element {
  const [col, setCol] = React.useState(3)
  return (
    <>
      <Typography variant="h6" gutterBottom>
        GridList Basic
      </Typography>
      <Button
        variant="contained"
        onClick={(): void => setCol((Math.ceil(Math.random() * 10) % 3) + 2)}
      >
        Change Column
      </Button>
      <Box clone height={450} style={{ margin: '20px 0' }}>
        <GridList cols={col} cellHeight={160}>
          {getTiles(col).map(tile => {
            return (
              <GridListTile key={tile.image} cols={tile.col || 1}>
                <img src={tile.image} alt="" />
              </GridListTile>
            )
          })}
        </GridList>
      </Box>
    </>
  )
}

function GridListWithTitleBars(): JSX.Element {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        GridList with TitleBars
      </Typography>
      <Box clone height={450} style={{ margin: '20px 0' }}>
        <GridList cols={2} cellHeight={160}>
          {getTiles(2).map(tile => {
            return (
              <GridListTile key={tile.image}>
                <img src={tile.image} alt="" />
                <GridListTileBar
                  title={tile.title}
                  subtitle={tile.author}
                  actionIcon={
                    <IconButton>
                      <Box clone color="rgba(255,255,255,0.5)">
                        <InfoIcon />
                      </Box>
                    </IconButton>
                  }
                />
              </GridListTile>
            )
          })}
        </GridList>
      </Box>
    </>
  )
}

const useStyles = makeStyles({
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
})

function InlineGridList(): JSX.Element {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Inline GridList
      </Typography>
      <Box clone style={{ margin: '20px 0', flexWrap: 'nowrap' }}>
        <GridList cols={2.5} cellHeight={160}>
          {getTiles(2).map(tile => {
            return (
              <GridListTile key={tile.image}>
                <img src={tile.image} alt="" />
                <GridListTileBar
                  className={classes.titleBar}
                  titlePosition="top"
                  actionPosition="left"
                  title={
                    <Box clone color="secondary.light">
                      <Typography variant="body1">{tile.title}</Typography>
                    </Box>
                  }
                  actionIcon={
                    <IconButton>
                      <Box clone color="secondary.light">
                        <StarBorderIcon />
                      </Box>
                    </IconButton>
                  }
                />
              </GridListTile>
            )
          })}
        </GridList>
      </Box>
    </>
  )
}
