import * as R from "ramda"

/**
 * For each talk we cannot directly query the speaker info (especially the name) but only the speakerSlugs (not the full slug but the important
 * speaker-identifier with which we can create the slug)
 * we have to query all speakers in a separate query. Then we need to extract from this allSpeakers-list
 * only those speaker info objects that belong to a given talk. This is what this method is doing.
 *
 * @param allSpeakers an array of all speaker objects
 * @param talk a talk object
 */
export const findSpeakersForTalk = ({ allSpeakers, talk }) => {
  return R.innerJoin(
    (speaker, slug) => speaker.fields.slug === `/speakers/${slug}/`,
    allSpeakers,
    talk.frontmatter.speaker
  )
}
