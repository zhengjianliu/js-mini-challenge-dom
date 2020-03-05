# DOM Quiz

Today, we'll be building a prototype of a small application about Ian's favorite soccer team, Liverpool FC. If you don't like Liverpool, 1. sorry, and 2. feel free to change the data and personalize your app!

There's a section in this Readme file for notes on each deliverable. As you go through the deliverables, write down some notes in this file on how you solved each problem. It'll help reinforce what you learned and give you a head start next time you see a similar problem.

## Deliverable 1

Open the `index.html` file in your browser and check the console in Chrome Dev Tools. You'll notice the console.log from line 2 of the `index.js` file is returning `null` instead of showing the `h1#header` element.

Figure out what you need to change to give Javascript access to the `h1#header` element.

**YOUR NOTES**
```

```

## Deliverable 2

Now that you have access to the `h1#header` element, use Javascript to change the element's color to red (of course).

**YOUR NOTES**
```

```

## Deliverable 3

Now that we've got a beautiful red header, we can show some players on the page. The player data is stored in a variable called `PLAYERS` in the `data.js` file - you can still access that variable in your `index.js` file (see if you can figure out why!).

First, uncomment the `console.log` under Deliverable 3 in the `index.js` file to see the data in the console. *For each* player in our application, we want to render their information on the DOM inside the `div#player-container` element. 

Create a DOM element that looks like this for each player and append it to the `div#player-container`:

```html
<div class="player">
  <h3>(Player Name)</h3>
  <img src="(Player Image)" alt="(Player Name)">
  <em>(Player Nickname)</em>
</div>
```

**YOUR NOTES**
```

```

## Deliverable 4

(update something else? queryselectorall?)

**YOUR NOTES**
```

```

## Deliverable 5

Uh-oh! A (Spurs) player snuck into our list. Use Javascript to find the element with the id (player-id) and remove that element from the page.

**YOUR NOTES**
```

```
