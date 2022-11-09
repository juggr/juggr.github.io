import moment from "moment/moment"
import * as R from "ramda"

// TODO: fix typing

/**
 * This function is used to determine the next upcoming event based on a list of events and the current date.
 * This is used to mark the next event in the list of all events and to determine which talk to show on the front page.
 *
 * If there is no event in the list the is in the future of today, then the last event is used.
 *
 *
 * @param allEvents a list of events
 * @param extractDate an optional function to extract the date from the event objects.
 * If no function is provided then a property "frontmatter.date" is used based on the markdown standard
 * @param today a date object of today. Usualy created by "new Date()" or a string representing today.
 * Basically anything that can parsed by moment.js
 */
export const getUpcomingEvent = ({
  allEvents,
  extractDate,
  today,
}: {
  allEvents: Array<any>
  extractDate?: any
  today?: Date | string
}) => {
  if (!allEvents) {
    return undefined
  }

  const extractor = extractDate ? extractDate : (edge) => edge.frontmatter.date

  const sortedEvents = R.sortBy(extractor)(allEvents)

  if (sortedEvents.length === 1) {
    return sortedEvents[0]
  }

  const todayMoment = moment(today).startOf("day")

  const datesAfter = R.filter((event) => {
    const date = moment(extractor(event)).startOf("day")

    return todayMoment.isSameOrBefore(date)
  })(sortedEvents)

  if (datesAfter && datesAfter.length > 0) {
    return datesAfter[0]
  } else {
    return R.reverse(sortedEvents)[0]
  }
}
