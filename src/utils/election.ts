/**
 * Civic calendar for the 2027 French presidential election.
 *
 * Official dates, set by the government in the Conseil des ministres of
 * 1 July 2026: first round on Sunday 18 April 2027, second round on
 * Sunday 2 May 2027. Voter registration closes on the 6th Friday before
 * the first round (12 March 2027) — a single deadline that now applies to
 * both online and in-person registration.
 *
 * Note: in Guadeloupe, Martinique, Guyane, Saint-Pierre-et-Miquelon,
 * Saint-Barthélemy, Saint-Martin and French Polynesia, voting takes place
 * the day before (Saturdays 17 April and 1 May).
 */

export type MilestoneId = 'registrationDeadline' | 'firstRound' | 'secondRound'

export interface ElectionMilestone {
  id: MilestoneId
  /** ISO 8601 with an explicit Europe/Paris UTC offset */
  date: string
}

/** Ordered civic deadlines: registration first, then the two rounds. */
export const ELECTION_MILESTONES: ElectionMilestone[] = [
  // Single registration deadline (online and in-person): 6th Friday before
  // the first round, end of day, CET.
  { id: 'registrationDeadline', date: '2027-03-12T23:59:59+01:00' },
  // Polls open at 8:00 Paris time (CEST).
  { id: 'firstRound', date: '2027-04-18T08:00:00+02:00' },
  { id: 'secondRound', date: '2027-05-02T08:00:00+02:00' },
]

/** Official service-public.fr service to check one's voter registration (ISE). */
export const CHECK_REGISTRATION_URL =
  'https://www.service-public.fr/particuliers/vosdroits/services-en-ligne-et-formulaires/ISE'

/** The next milestone still in the future, or null once the election is over. */
export function getNextMilestone(now: Date): ElectionMilestone | null {
  return ELECTION_MILESTONES.find(m => new Date(m.date).getTime() > now.getTime()) ?? null
}
