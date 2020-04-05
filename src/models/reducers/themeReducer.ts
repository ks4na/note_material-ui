import {
  Theme,
  ThemeOptions,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'
import { ThemeActions, ALTER_THEME_TYPE } from '../actions'

export type ThemeState = Theme

const themeOptions: ThemeOptions = {
  overrides: {},
  props: {},
  palette: {
    primary: teal,
    secondary: orange,
  },
}
const initState: Theme = responsiveFontSizes(createMuiTheme(themeOptions))

export default function themeReducer(
  state = initState,
  action: ThemeActions
): Theme {
  switch (action.type) {
    case ALTER_THEME_TYPE:
      return createMuiTheme({
        ...themeOptions,
        palette: { ...themeOptions.palette, type: action.payload },
      })
    default:
      return state
  }
}
