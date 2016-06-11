function replyGoodbyes() {
	console.log("ggodbye")
    var answers = [
      "hello\n i am leon the bot\n" + 
		"i'm here to help you find informations about other 42 students \n" + 
		"you can ask me several questions like :\n where is \"login\"" +
		"and i will find the position of your friends\n" +
		"or if you want to know which level is one of your friend, you can ask me!",
    ];
    return (answers[0]);
}

module.exports = replyGoodbyes;