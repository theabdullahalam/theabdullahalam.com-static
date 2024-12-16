module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.addPassthroughCopy("media");
};