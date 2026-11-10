// PROTOTYPE - NOT FOR PRODUCTION
// Question: Deviner une œuvre à partir d'une émotion et de phrases de membres : amusant, faisable, avec une montée ?
// Date: 2026-11-10
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
// The content (works, clues, each game's grid) lives in data.js. The number of tries is the number of
// clues (6, from the concept), so it is not a knob here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  flip_s: { value: 0.5, min: 0.1, max: 1.5, step: 0.05 },       // seconds a newly revealed clue takes to turn over
  blur_art_px: { value: 12, min: 0, max: 30, step: 1 },         // blur on clue 6's picture until the reveal (px)
  blur_initials_px: { value: 1.5, min: 0, max: 10, step: 0.5 }, // blur on clue 6's initials until the reveal (px)
  reveal_delay_s: { value: 0.9, min: 0, max: 3, step: 0.1 },    // seconds between the last try and the reveal screen
  toast_s: { value: 2.4, min: 1, max: 6, step: 0.2 },           // seconds a confirmation message stays up
};
