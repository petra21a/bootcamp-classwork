# Star Wars 01 (Activity 8)

## File

* `server1.js`

## Instructions

* Work with those around you to confirm your `server1.js` file is working. This means figuring out: what dependencies to install, how to run the file, and how to view the resulting website in your browser. This step requires you to make ZERO changes to the code file. At this point, you are just getting the file you are given to run.

  * Then, once you've gotten the original code to display in the browser, create a new `Obi Wan Kenobi route` to display Kenobi's information. Use the comments and the previous code in the file as a guide.

  * Help those around you when done.

# Star Wars 02 (Activity 9)

## File

* `server2.js`


## Instructions

* Examine the code sent to you. Once again, run the `server2.js` file and view the page in the browser. Troubleshoot any issues that arise. Again NO CODE CHANGES required.

  * Then once you have a working server instance, begin to examine the file. Try to explain to yourself and those around you what the significance of `/:character` and `req.params.character` is.

  * Create a test case to check your hypothesis.

  # Star Wars 03 (Activity 10)

## File

* `server3.js`

## Instructions

* Examine the code flagged in the comments. Explain to those around you what it does and how it works. Be sure to create test cases that confirm your hypothesis.

# Star Wars 04 (Commented) (Activity 11)

## File

* `server4.js`

## Instructions (Activity 12)

* Examine the code flagged in the comments. Was your hypothesis from the previous activity correct?

# Star Wars 05

## File

* `server5.js`

## Instructions (Activity 12)

* Spend a few moments researching what `body-parser` is for and what `req.body` means in the context of Express.

  * Then research how you can POST data to the Express server.

### Bonus

* Use Postman to send a POST request to the server you've been provided. Confirm that your character has been added to the database correctly.

# Star Wars 06 (Activity 13)

## File

* `server6.js`

## Instructions

* Look at the file sent to you then explain to the person next to you what the `res.sendFile` line does. Then try creating a new HTML file and routing to that one instead.


# Star Wars Final App (Activity 14)
# **Instructions**

* Spend a few moments looking over the code sent to you. First, get the server running, then begin to dissect the JavaScript code found at the bottom of `add.html`.

* Explain to one another what the code does, what its for, and why its relevant to the application so far. Be sure to explain to one another what the `$.post` code is doing.



# Deploying a Node Web Server to Heroku (SLACKED Activity 14)

This guide walks through the necessary steps to deploy your full stack Node.js application to Heroku!

### Prerequisites

To begin with, you'll need a git repository initialized locally with your basic web server code working and committed.

1. There are a couple of ways to do this. 
   * If you cloned from a remote repository and then wrote/committed your code to the local clone, you should be set and can skip these steps and go straight to deploying.
   * If you haven't set up a git repository for your files yet (or didn't clone), proceed to the next step.

2. Run `git init` locally in the folder with your web server files.
   * If you want to also push to GitHub in addition to hosting on Heroku (recommended), you can follow the [Adding Existing Projects to GitHub through the command line Guide](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

3. Commit all changes (if you haven't already with the above steps) using `git add .` and `git commit -am "<message>"`. If you haven't run into any errors at this point, you should be able to proceed to the next section. 
   * You may also want to create a `.gitignore` file if you don't have one already. This file will allow you to tell git to not track files such as those in the `node_modules` folder.
   * The [GitHub gitignore Documentation](https://help.github.com/articles/ignoring-files/) and this [node gitignore example](https://github.com/github/gitignore/blob/master/Node.gitignore) are useful resources for this, though it is pretty much as simple as:
     1. Before you commit, create a file called `.gitignore`. Inside of that file, add `node_modules/` as the first line and save the file. Now, git should no longer track `node_modules` files.

### Steps to Deploy

1. Log in to Heroku.
   * If you are a windows user open the cmd.exe (NOT Git Bash) and type `heroku login`. Keep this command prompt open in the background. Then, open Git Bash and navigate to the folder with your code.

   * If you are a mac open terminal and type the command `heroku login`. Enter your Heroku credentials and proceed with all the below steps in terminal. Navigate to the folder with your code.

2. Run the command: `git remote –v` .
   * This is to show you that right now, you do not have heroku listed as a remote repository.

3. Run the command `heroku create`.
   * This will create an app instance on the Heroku server and will add heroku as a remote for your local git repository.

4. Run `git remote –v` again.
   * This isn't necessary, but helps to confirm that Heroku is now in your list of remotes. This time you should see the `heroku` remote.

5. Ensure that your `package.json` file is set up correctly. It must have a `start` script and all dependencies defined. E.g.:
   ```json
   {
     "name": "starwars",
     "version": "1.0.0",
     "description": "Helps you find the characters you are looking for",
     "main": "server.js",
     "dependencies": {
       "body-parser": "^1.15.0",
       "express": "^4.13.4"
     },
     "scripts": {
       "start": "node server.js"
     }
   }
   ```

6. Ensure your web server is starting with a dynamic port.
   * For an express app, the code for this would look like:
   ```js
   var PORT = process.env.PORT || 3000;
   ...
   app.listen(PORT, function() {
   ```
   * This allows you to get the port from the bound environment variable (using `process.env.PORT`) if it exists, so that when your app starts on heroku's machine it will start listening on the appropriate port.
   * You app will still run on port 3000 locally if you haven't set an environment variable.

7. Commit any changes you've made up until this point using `git commit -am "<message>"`

8. Run the command `git push heroku master`. A series of processes will be initiated. Once the process is complete note the name of the app.

9. Log in to your Heroku account at www.heroku.com . You will see a list or a (single) app. Note the one that has the same funky name as you saw in bash. Click on it.

10. Click on settings. Then, scroll down until you see the part that says: "Domains". Note the URL listed under Heroku Domain.

11. Finally, go in your browser to the URL listed under the Heroku Domain. If all went well you should see your website!