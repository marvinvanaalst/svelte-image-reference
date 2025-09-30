export const prerender = true;

export async function load({ params }) {
    return {
        assetSlug: "asset-path", staticSlug: "static-path"
    }
}
