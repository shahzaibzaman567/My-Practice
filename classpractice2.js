let text = `It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
writing the trilogy, which contains, with the weird applicability available only to poetry and
myth, the essential notion that the good gray wizard can understand the evil magi precisely
because he is just enough like them to grasp their minds and motives in ways that they cannot
grasp his.`
for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
        console.log(text);
    }
} if (false) {
    console.log("koch to kar bar ha")
}
