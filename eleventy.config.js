module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("media");

    eleventyConfig.addCollection("postTags", async (collectionApi) => {
        const tagsList = new Set();
        collectionApi.getAll().map( item => {
            if (item.data.tags) { // handle pages that don't have tags
                if (item.data.tags.includes("post")){ // only if post is also in the tag
                    item.data.tags.map( tag => tagsList.add(tag))
                }
            }
        });

        const sortedTagsList = Array.from(tagsList).sort((a, b) => {
            return a.localeCompare(b); // Alphabetical order
        });

        return sortedTagsList;
    })

    eleventyConfig.addCollection("popularTags", async (collectionApi) => {
        const tagsList = new Set();
        collectionApi.getAll().map( item => {
            if (item.data.tags) { // handle pages that don't have tags
                if (item.data.tags.includes("post")){ // only if post is also in the tag
                    item.data.tags.map( tag => {
                        if (tag!="post"){
                            tagsList.add(tag)
                        }
                    })
                }
            }
        });

        const sortedTagsList = Array.from(tagsList).sort((a, b) => {
            return collectionApi.getFilteredByTag(b).length - collectionApi.getFilteredByTag(a).length; // Descending order
        });
        
        return sortedTagsList.slice(0, 6);
        
    })


    eleventyConfig.addNunjucksFilter("toReadableDate", (date) => {
        const monthText = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const year = date.getUTCFullYear().toString();
        const month = monthText[date.getUTCMonth()];
        const day = date.getUTCDate().toString();
        return `${day} ${month}, ${year}`;
    });



    eleventyConfig.addNunjucksFilter("excerpt", (content) => {
        return content.substring(0, 200) + "...";
    });



};