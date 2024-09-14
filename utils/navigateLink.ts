export default async function navigateLink(link: string) {
  await navigateTo(link, {
    external: true,
    open: {
      target: '_blank',
    },
  })
}
