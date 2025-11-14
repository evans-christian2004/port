import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://christianevans.dev";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${baseUrl}/experience`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/CSResume.pdf`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },

        // for when I move my skills section
        // {
        //     url: `${baseUrl}/skills`,
        //     lastModified: new Date(),
        //     changeFrequency: "monthly",
        //     priority: 0.5,
        // },
    ];
}