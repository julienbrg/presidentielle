# Changelog

## Unreleased

### Changed

- Homepage « Suis-je inscrit·e ? » button now uses the brand accent color (`brandColors.accent`) instead of the Chakra blue palette, and sizes to its label instead of stretching full width.
- More breathing room at the bottom of the homepage (`pb={48}` instead of symmetric `py={16}`).
- Countdown tagline: dropped the opening « Pas de bullshit » ("No bullshit") clause in all 10 languages; the tagline now reads « Juste ce qu’il faut pour voter. » ("Just what you need to vote.").
- Wording: use the singular « présidentielle » everywhere (header title, French countdown heading, SPECS.md title and tagline) instead of « présidentielles ».
- Updated the 2027 election calendar in `src/utils/election.ts` to the official dates set in the Conseil des ministres of 1 July 2026: registration deadline on 12 March 2027 (single deadline for online and in-person), 1st round on 18 April 2027, 2nd round on 2 May 2027 (previously provisional projections: 3 March / 11 April / 25 April).

### Removed

- The « Dates prévisionnelles — dans l'attente du décret officiel » note on the homepage (and its `provisionalNote` translation string in all 10 languages), obsolete now that the dates are official.

### Added

- Homepage hero per SPECS §0: countdown to the next civic deadline (voter-registration deadline, then 1st round, then 2nd round), tagline, and a single official link — « Suis-je inscrit·e ? » pointing to the service-public.fr voter-registration check (ISE). The homepage no longer requires login.
- `src/utils/election.ts`: 2027 election calendar (single source of truth for the dates) and the official registration-check URL.
- `Countdown` component (`src/components/Countdown.tsx`): ticks every second, shows the upcoming milestone, turns red when the registration deadline is less than 30 days away, and lists all milestone dates formatted in the visitor's language (Europe/Paris time).
- `home.countdown` translation strings in all 10 supported languages.

### Removed

- The template homepage (login prompt, wallet address display, message signing).
