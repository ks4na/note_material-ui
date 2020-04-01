export const ALTER_THEME_TYPE = 'ALTER_THEME_TYPE'
export type ALTER_THEME_TYPE = typeof ALTER_THEME_TYPE

type ThemeType = 'light' | 'dark'

interface AlterThemeTypeAction {
  type: ALTER_THEME_TYPE
  payload: ThemeType
}

export function alterThemeType(type: ThemeType): AlterThemeTypeAction {
  return {
    type: ALTER_THEME_TYPE,
    payload: type,
  }
}

export type ThemeActions = AlterThemeTypeAction
