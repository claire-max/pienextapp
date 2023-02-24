import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "el3o0uwr",
    dataset: 'protection',
    apiVersion: '2023-02-23',
    useCdn:true,
    token:
    "skBfo3JxcZPRfG6CEQw47eNHENGfDiPmRi8XvV3jr3Dj3mauALj5pyD9ysoAlmT5fV1ODW6pgmRgwg4TpkCHtsmtlHN1IlnP6ZxXXXDVIFOeYdcRuKETQiIR2f6AXfXy7vQos9VC4x0sFQ0mXikElhbcRVSQGnWYbe8KffxLJ8DXnxudADpo"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)