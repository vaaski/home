export interface QuickToggleBase {
  id: string
  name: string
  enabled: boolean
  type: string
  icon?: string
  offIcon?: string
  spin?: boolean
}

export interface QuickTogglePlug extends QuickToggleBase {
  type: "plug"
}

export type QuickToggle = QuickTogglePlug
