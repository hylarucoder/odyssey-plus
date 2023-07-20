// import { NotionRenderer } from "vue3-notion"
//
// export default defineComponent({
//   setup() {
//     const route = useRoute()
//     const slug = route.params.slug
//     const { mapPageUrl, pageLinkOptions } = useProps()
//
//     const { data, pending, error } = useAsyncData(`note-page-${slug}`, async () => {
//       const blockMap = await $fetch("/api/posts/" + slug)
//       return blockMap
//     })
//
//     return () => (
//       <div class="w-full px-2">
//         {pending.value || error.value ? (
//           <div class="notion">Loading...</div>
//         ) : (
//           <NotionRenderer
//             blockMap={data.value}
//             fullPage
//             prism
//             katex
//             mapPageUrl={mapPageUrl}
//             pageLinkOptions={pageLinkOptions}
//           />
//         )}
//       </div>
//     )
//   },
// })
