/** Scroll distance over which the hero logo travels into the nav logo slot. */
export const HERO_LOGO_MORPH_DISTANCE = 260

/** Point in the morph where the real nav logo takes over from the hero logo. */
export const HERO_LOGO_HANDOFF = 0.96

/**
 * Point where the hero logo is dropped. It sits docked on top of the nav logo
 * for the gap after HERO_LOGO_HANDOFF so a slow frame can never leave the slot
 * empty.
 */
export const HERO_LOGO_RELEASE = 1.06
