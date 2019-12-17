import core from 'src/tokens/core'

const light = {
  Default: core.Color.Neutral900,
  Secondary: core.Color.Neutral700,
  Active: core.Color.Primary300,
  ActiveHover: core.Color.Primary400,
  Error: core.Color.Error300,
  Disabled: core.Color.Neutral500,
  InputPlaceholder: core.Color.Neutral600,
  ButtonLink: core.Color.Primary300,
  ButtonLinkHover: core.Color.Primary400,
  ButtonPrimary: core.Color.NeutralWhite,
  ButtonPrimaryDisabled: core.Color.Neutral500,
  ButtonNeutral: core.Color.Primary300,
  ButtonNeutralHover: core.Color.Primary400,
  ButtonNeutralDisabled: core.Color.Neutral600,
  ButtonTransparent: core.Color.Primary300,
  ButtonTransparentHover: core.Color.Primary400,
  ButtonTransparentDisabled: core.Color.Neutral600,
  ButtonDestructive: core.Color.NeutralWhite,
  ButtonDestructiveDisabled: core.Color.Neutral500,
  TabActive: core.Color.Primary300,
  LeftNavItemActive: core.Color.Primary400,
}

const dark = {
  ...light,
  Default: core.Color.NeutralWhite,
  Secondary: core.Color.Neutral400,
  Active: core.Color.Primary200,
  ActiveHover: core.Color.Primary100,
  Error: core.Color.Error200,
  Disabled: core.Color.Neutral600,
  InputPlaceholder: core.Color.Neutral500,
  ButtonLink: core.Color.Primary200,
  ButtonLinkHover: core.Color.NeutralWhite,
  ButtonPrimaryDisabled: core.Color.Neutral500,
  ButtonNeutral: core.Color.NeutralWhite,
  ButtonNeutralHover: core.Color.NeutralWhite,
  ButtonNeutralDisabled: core.Color.Neutral500,
  ButtonTransparent: core.Color.Primary200,
  ButtonTransparentHover: core.Color.NeutralWhite,
  ButtonTransparentDisabled: core.Color.Neutral600,
  TabActive: core.Color.Primary200,
  LeftNavItemActive: core.Color.NeutralWhite,
}

export default {
  light,
  dark,
}
