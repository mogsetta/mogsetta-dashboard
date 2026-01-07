export default async function OfferEngineeringLesson({
  params,
}: {
  params: Promise<{ lessonSlug: string }>;
}) {
  const { lessonSlug } = await params;
  const slug = lessonSlug as LessonKey;