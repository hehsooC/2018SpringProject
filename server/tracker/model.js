const QuotesStack =  [ 
    "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk. -Doug Larson", 
    "If you make listening and observation your occupation, you will gain much more than you can by talk. -Robert Baden-Powell", 
    "One of the most sincere forms of respect is actually listening to what another has to say. -Bryant H. McGill", 
    "Listening is a magnetic and strange thing, a creative force. The friends who listen to us are the ones we move toward. When we are listened to, it creates us, makes us unfold and expand. -Karl A. Menniger", 
    "Everything in writing begins with language. Language begins with listening. -Jeanette Winterson", 
    "If you're going to have a story, have a big story, or none at all.  -Joseph Campbell", 
    "Those who tell the stories rule the world. -Hopi American Indian Proverb", 
    "There's always room for a story that can transport people to another place. -J.K. Rowling", 
    "Yes, in all my research, the greatest leaders looked inward and were able to tell a good story with authenticity and passion. -Deepak Chopra", 
    "Transparency, honesty, kindness, good stewardship, even humor, work in businesses at all times. -John Gerzema", 
    "Eyes so transparent that through them the soul is seen. -Theophile Gautier", 
    "Truth never damages a cause that is just. -Mahatma Gandhi", 
    "I just think we need more accountability and more transparency. -John Thune", 

    ]; 
 
var iCurrentQuote = 0; 
 
const PicturesStack = [ 
 
]; 
var iCurrentPicture = 0; 

 
var GetQuotes = () => QuotesStack.slice(iCurrentQuote, iCurrentQuote += 7) 
 
module.exports.GetQuotes = GetQuotes;
