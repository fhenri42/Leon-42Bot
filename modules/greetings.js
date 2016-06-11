function replyGreetings() {

    var answers = [
      'Hello',
      'That\'s great to talk with you!',
      'Welcome there!'
    ];

    return (answers[Math.floor(Math.random() * 2)]);
}

module.exports = replyGreetings;