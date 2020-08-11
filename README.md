# Effervess: Store Your Beer Recipes

We've all been there, beer recipes scattered throughout several different books and apps. It's not fun when you have to dig for that ONE recipe you want to brew TODAY.

That's where Effervess comes in to help. With Effervess you can create your own recipes, input recipe data from other websites, update those recipes, or delete the ones you don't like. This allows you to have all the beer recipes you know and love in one easy to access place!


## Important Links

- [API](https://github.com/rainswerld/effervess-api)
- [My Planning & Future Steps](https://www.notion.so/Effervess-52b266de796e4fa69b9faba38bed935b)
- [Deployed Application](https://rainswerld.github.io/effervess-client/)

## Planning Story

I began my planning by trying to understand how the data should be stored, changed, and accessed. I did this without touching the code so that I knew ahead of time what kinds of bugs and difficulties might arise by the time I wanted to start coding the application out.

I used Asana to track what feature I wanted to focus on and what feaetures needed to be implemented in tihe future - this allowed me to turn an overwhelming task of creating a database that connected to a front-end client into digestible small steps. These steps were then converted into a sschedule of what needed to be done by what date to meet the deadline. I had four days to make an MVP (minimum viable product), so breaking the overall project down into small steps showed how many features I should get through in a day's time.

I created wireframes to help guide what the overall style should look like and an ERD to better understand how the user would be accessing their resources. I wanted these to be dynamic since the app will evolve. Because of this decision, I used Miro to make my wireframes and an ERD application so that when the time comes I will be able to update both easily.

Finally, I used Notion to organize my thoughts, write some pseudo code, and try to better artciluate the issues and features I needed to add or change in the future.

In terms of problem solving, similar to how I broke down the big scope of the project into digestable pieces, I would break down my problems into small pieces. When a bug or error popped up, I would take a step back and understand what the error or bug was telling me. If I didn't undertand it, I would look at documentation or just look through the code to see where I might have done something with the code that would trip up the functionality. By breaking down the errors and digging into the smaller pieces, it allowed me to better understand how the code worked but also all the links in the chain that might throw an error.

### User Stories

1. As a user, I would like to signup, signin, logout, and change my password.
2. As a user, I would like to store my own beer recipes.
3. As a user, I would like to update or delete my own beer recipes.
4. As a user, I would like to see all the recipes I've created.
5. As a user, I would like to see recipes other users have created.

### Technologies Used

- Javascript
- jQuery
- AJAX
- Express
- MongoDB
- Mongoose
- Node
- HTML/CSS
- Bootstrap
- Handlebars

### Unsolved Problems & Future Features

- Incorpoating an array into the ingredients Schema so the user can input multiple ingredients that would later be printed as an unordered list
- Deciding on how hops should be modeled in my recipeSchema
- Giving the user the ability to search using keywords
- Styling

## Images

#### Wireframe:
- [wireframe](https://miro.com/app/board/o9J_koeZQ-U=/)

---

#### ERD:
- [ERD](https://imgur.com/gallery/6aFLR5v)
