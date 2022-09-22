let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
      quote:'"The way to get started is to quit talking and begin doing."',
      person:'Walt Disney'
  },
  {
      quote:'"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
      person:'Steve Jobs'
  },
  {
      quote:'"When you reach the end of your rope, tie a knot in it and hang on."',
      person:'Franklin D. Roosevelt'
  },
  {
      quote:'"Don\'t judge each day by the harvest you reap but by the seeds that you plant. "',
      person:'Robert Louis Stevenson'
  },
  {
      quote:'"It is during our darkest moments that we must focus to see the light."',
      person:'Aristotle'
  },
  {
      quote:'"Many of life\'s failures are people who did not realize how close they were to success when they gave up."',
      person:'Thomas A. Edison'
  },
  {
      quote:'"The only impossible journey is the one you never begin."',
      person:'Tony Robbins'
  },
  {
      quote:'"Only a life lived for others is a life worthwhile."',
      person:'Albert Einstein'
  },
  {
      quote:'"Success usually comes to those who are too busy to be looking for it."',
      person:'Henry David Thoreau'
  },
  {
      quote:'"he way to get started is to quit talking and begin doing."',
      person:'Walt Disney'
  },
  {
      quote:'"If you really look closely, most overnight successes took a long time."',
      person:'Steve Jobs'
  }];

  btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() *quotes.length);
  
    quote.innerText = quotes[random].quote;  
    person.innerText = quotes[random].person;  

  });