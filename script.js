const jokes = [
  `What did one hat say to the other? You stay here. I'll go on ahead.`,
  `Where do pirates get their hooks? Secondhand stores.`,
  `Knock knock. Who's there? Boo. Boo who? Don't cry, I'm only joking!`,
  `What did the pirate say when he turned 80? Aye matey.`,
  `What do you call two birds in love? Tweethearts!`,
  `Why did the picture go to jail? Because it was framed.`,
  `What do you call a sad cup of coffee? Depresso.`,
  `Irish puns are the most O'ffensive.`,
  `I went to buy some camo pants but couldn’t find any.`,
  `Knock knock. Who's there? Adore. Adore who? Adore is between us, so please open up.`,
  `How do you organize a space party? You planet.`,
  `How did the telephone propose to his girlfriend? He gave her a ring.`,
  `What do horses say when they fall? Help, I’ve fallen and I can’t giddy up.`,
  `If a parsley farmer gets sued, can they garnish his wages?`,
  `Knock knock. Who's there? Candice. Candice who? Candice joke get any worse?`,
  `I couldn't figure out why the baseball kept getting larger. Then it hit me.`,
  `What runs but never goes anywhere? A refrigerator.`,
  `What do you call a beehive without an exit? Unbelievable.`,
  `What did the cucumber say to the pickle? You mean a great dill to me.`,
  `Why don’t we see elephants hiding in trees? Because they’re really good at it.`,
  `6:30 is the best time on a clock, hands down.`,
  `Which is faster, hot or cold? Hot, because you can catch a cold.`,
  `What did the tomato say to the other tomato during a race? Ketchup.`,
  `Knock, knock. Who’s there? Iva. Iva who? I’ve a sore hand from knocking.`,
  `What did one ocean say to the other ocean? Nothing, they just waved.`,
  `If attacked by a mob of clowns, go for the juggler.`,
  `Why can’t you trust duck doctors? They’re all quacks.`,
  `Knock, knock. Who’s there? Wooden shoe. Wooden shoe who? Wooden shoe like to hear another joke?`,
  `What’s the difference between a hippo and a zippo? One’s pretty heavy and the other’s a little lighter.`,
  `What do you call a ghost's sweetheart? A ghoul-friend.`,
  `Why can't a leopard hide? Because he's always spotted.`,
  `The rotation of Earth really makes my day.`,
  `A termite walks into the bar and asks, ”Is the bar tender here?”`,
  `Why are the Irish so wealthy? Because their capital is always Dublin.`,
  `Knock, knock. Who’s there? Cher. Cher who? Cher would be nice if you opened the door.`,
  `What do you call an alligator detective? An investi-gator.`,
  `Did you hear the one about the roof? Never mind, it's over your head.`,
  `If at first you don't succeed, then skydiving isn't for you.`,
  `Why didn't the melons get married? Because they cantaloupe.`,
  `I just flew into town and my arms are so tired.`,
  `How do you stop a bull from charging? Cancel its credit card.`,
  `I always wanted to be a doctor, but I didn't have the patients.`,
  `How you fix a broken pumpkin? With a pumpkin patch.`,
  `Knock, knock. Who’s there? Wa. Wa who? What are you so excited about?`,
  `Never buy anything with Velcro. It’s a total rip-off.`,
  `I was going to tell a time-traveling joke, but you didn't like it.`,
  `I buy all my guns from a guy called T-Rex. He’s a small arms dealer.`,
  `Why is the mushroom always invited to parties? He's a fungi.`,
  `I'm on a seafood diet: When I see food, I eat it.`,
  `What did the full glass say to the empty glass? You look drunk.`,
  `What did the snail riding on the turtle's back say? Wheeeeee!`,
  `Why are skeletons so calm? Because nothing gets under their skin.`,
  `Did you hear about the guy whose whole left side got amputated? He’s all right now.`,
  `What do you call a boomerang that won’t come back? A stick.`,
  `Knock, knock. Who’s there? Wooden shoe. Wooden shoe who? Wooden shoe like to hear another joke?`,
  `How does a rancher keep track of his cattle? With a cow-culator.`,
  `Geology rocks, but geography’s where it’s at.`,
  `Did you hear about the man who fell into an upholstery machine? He's fully recovered.`,
  `Did you hear the rumor about butter? Well, I'm not going to go spreading it!`,
  `Why don't sharks eat clowns? Because they taste funny.`,
  `Where do cows go on Friday nights? To the moo-vies.`,
  `Why don't lobsters like to share? They're shellfish.`,
  `Why don’t eggs tell jokes? They’d crack each other up.`,
  `One of the cows didn’t produce milk today. It was an udder failure.`,
  `A horse walks into a bar. The bartender says, "Why the long face?"`,
  `What do you call a shoe made from a banana? A slipper.`,
  `Knock, knock. Who’s there? Banana. Banana who? Knock, knock. Who’s there? Banana. Banana who? Knock, knock. Who’s there? Orange. Orange who? Orange you glad I didn’t say banana?`,
  `What do you get from a pampered cow? Spoiled milk.`,
  `Why couldn't the pony talk? Because she was just a little hoarse.`,
  `What do you call a bee that can't make up its mind? A Maybe.`,
  `What do you call a bear without any teeth? A gummy bear.`,
  `What's a ninja's favorite type of shoes? Sneakers.`,
  `What did the two pieces of bread say on their wedding day? It was loaf at first sight.`,
  `A cheese factory exploded in France. Da brie was everywhere.`,
  `Knock, knock. Who’s there? Ida. Ida who? I think it’s pronounced Idaho.`,
  `What did one wall say to the other? I'll meet you at the corner.`,
  `What do dentists call their x-rays? Tooth pics.`,
  `What job did the frog have at the hotel? Bellhop.`,
  `The future, the present, and the past walk into a bar. Things got a little tense.`,
  `What happens when a snowman throws a tantrum? He has a meltdown.`,
  `What did the full glass say to the empty glass? You look drunk.`,
  `What do elves learn in school? The elf-abet.`,
  `What happens when frogs park illegally? They get toad.`,
  `Why did the restaurant hire a pig? He was good at bacon.`,
  `I used to think I was indecisive. But now I’m not so sure.`,
  `Wanna hear a joke about paper? Never mind—it's tearable.`,
  `What kind of shoes does a lazy person wear? Loafers.`,
  `Did you hear the rumor about butter? Well, I'm not going to spread it.`,
  `How do you open a banana? With a mon-key.`,
  `How do you make a water bed bouncier? Add spring water.`,
  `Why did the robber jump in the shower? He wanted to make a clean getaway.`,
  `I can’t believe I got fired from the calendar factory. All I did was take a day off.`,
  `Why was the broom late to class? It over-swept.`,
  `What did the buffalo say when his kid went to college? Bison.`,
  `Why did the cookie go to the nurse? Because he felt crumby.`,
  `What did the mayonnaise say when the refrigerator door was opened? Close the door, I'm dressing.`,
  `Why do pancakes always win at baseball? They have the best batter.`,
  `What do you call a fibbing cat? A lion.`,
  `I tried to catch fog yesterday. Mist.`,
  `Why did the student eat his homework? Because his teacher said it was a piece of cake.`,
];

function generateJoke(joke) {
  let count = Math.floor(Math.random() * 100);
  let randomJoke = joke[count];
  return randomJoke;
}

let refresh = document.body.getElementsByClassName("btn")[0];
let jokeParagraph = document.getElementById("jokeParagraph");
console.log(jokeParagraph);
refresh.onclick = print;

function print() {
  jokeParagraph.innerHTML = generateJoke(jokes);
}
