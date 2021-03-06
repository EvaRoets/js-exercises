const shows = [
    `legion`,
    `sneaky pete`,
    `santa clarita diet`,
    `riverdale`,
    `the young pope`,
    `a series of unfortunate events`,
    `taboo`,
    `colony`,
    `24: legacy`,
    `speechless`,
    `sherlock`,
    `stranger things`,
    `this is us`,
    `timeless`,
    `the oa`,
];
const wrapText = (content, tagName) => {
    return `<${tagName}>${content}</${tagName}>`;
}
const writeTitle = title => {
    const newTitle = uCFirst(title);
    document.write(wrapText(newTitle, "li"));
};
const uCFirst = sentence => {
    let words = sentence.split(" ");
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice());
    return words.join();
};
document.write("<ol>");
shows.forEach(show => writeTitle(show));
document.write("</ol>");

