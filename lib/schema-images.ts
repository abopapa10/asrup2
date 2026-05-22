import { absoluteUrl } from "@/lib/seo";

type SchemaImageOptions = {
  width?: number;
  height?: number;
  caption?: string;
};

/** Google zengin sonuçları için ImageObject */
export function schemaImageObject(path: string, options?: SchemaImageOptions) {
  const url = absoluteUrl(path);

  return {
    "@type": "ImageObject" as const,
    "@id": `${url}#image`,
    url,
    contentUrl: url,
    ...(options?.width ? { width: options.width } : {}),
    ...(options?.height ? { height: options.height } : {}),
    ...(options?.caption ? { caption: options.caption } : {}),
  };
}
