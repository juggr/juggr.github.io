import getUpcomingEvent from "./get-upcoming-event"

import moment from "moment"


const events = [
  {
    frontmatter: {
      date: "2018-01-01",
      title: "january"
    }
  },
  {
    frontmatter: {
      date: "2018-03-01",
      title: "march"
    }
  },
  {
    frontmatter: {
      date: "2018-02-01",
      title: "february"
    }
  },
]

const today = "2018-01-15"

test("no events in list", () => {

  const result = getUpcomingEvent({today})

  expect(result).toBeUndefined()

})

test("just a single event in list", () => {
  const list = [
    {
      frontmatter: {
        date: "2018-01-01",
        title: "january"
      }
    }
  ]

  const result = getUpcomingEvent({allEvents: list, today})

  expect(result.frontmatter.title).toBe("january")
})

test("today is in between events", () => {
  const result = getUpcomingEvent({ allEvents: events, today })

  expect(result.frontmatter.title).toBe("february")
})

test("today is after last event", () => {
  const result = getUpcomingEvent({allEvents: events, today: "2018-04-01"})

  expect(result.frontmatter.title).toBe("march")
})


test("today is before first event", () => {
  const today = "2017-04-01"

  const result = getUpcomingEvent({allEvents: events, today})

  expect(result.frontmatter.title).toBe("january")
})