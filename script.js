document.addEventListener('DOMContentLoaded', function() {
  var timeOfDay = getTimeOfDay();
  var title = document.getElementById('title');
  title.textContent = "Let's start our " + timeOfDay + " with a new quote";

  var quoteContainer = document.getElementById('quote-container');
  var quote = document.getElementById('quote');
  var newQuoteBtn = document.getElementById('new-quote');

  var quotes = [
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your time is limited, don't waste it living someone else's life.",
    "In the middle of every difficulty lies opportunity.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best way to predict the future is to create it.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "Success is not in what you have, but who you are.",
    "The ache for home lives in all of us, the safe place where we can go as we are and not be questioned.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The future depends on what you do today.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Your life does not get better by chance, it gets better by change.",
    "The only thing standing between you and your goal is the story you keep telling yourself."
  ];
  
  var authors = [
    "- Steve Jobs",
    "- Theodore Roosevelt",
    "- Eleanor Roosevelt",
    "- Winston Churchill",
    "- Maya Angelou",
    "- Albert Einstein",
    "- Franklin D. Roosevelt",
    "- Sam Levenson",
    "- Peter Drucker",
    "- Dalai Lama",
    "- Oprah Winfrey",
    "- Ralph Waldo Emerson",
    "- Sarah Ban Breathnach",
    "- Roopleen",
    "- John C. Maxwell",
    "- Mahatma Gandhi",
    "- Les Brown",
    "- Brian Tracy",
    "- Zig Ziglar",
    "- Anthony Robbins"
  ];
  
  var colors = [
    "#7256F6",
    "#F2A33A",
    "#00CC00",
    "#FF4500",
    "#9400D3",
    "#00CED1",
    "#FF69B4",
    "#4682B4",
    "#800000"
  ];

  newQuoteBtn.addEventListener('click', function() {
    setRandomQuote();
  });

  function setRandomQuote() {
    var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomQuoteIndex];
    var randomAuthor = authors[randomQuoteIndex];
    var formattedQuote = `<i class="fas fa-quote-left"></i> ${randomQuote} <i class="fas fa-quote-right"></i><br><span class="author">${randomAuthor}</span>`;
    quote.innerHTML = formattedQuote;
    changeBackgroundColor();
  }
  
  

  function changeBackgroundColor() {
    var randomColorIndex;
    var selectedColor;
    var previousColor = document.body.style.backgroundColor;
  
    // Generate a new color until it is different from the previous color
    do {
      randomColorIndex = Math.floor(Math.random() * colors.length);
      selectedColor = colors[randomColorIndex];
    } while (selectedColor === previousColor);
  
    document.body.style.background = selectedColor;
    newQuoteBtn.style.backgroundColor = selectedColor;
    quote.style.color = selectedColor;
    document.querySelector('.container').style.backgroundColor = tinycolor(selectedColor).lighten(30).toString();
  }
  

  // Call setRandomQuote on page load to display initial quote
  setRandomQuote();
});

function getTimeOfDay() {
  var date = new Date();
  var hour = date.getHours();

  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 16) {
    return "afternoon";
  } else if (hour >= 16 && hour < 20)  {
    return "evening";
  } else {
    return "night";
  }
}
