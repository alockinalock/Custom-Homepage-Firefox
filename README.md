# Custom-Homepage-Firefox

### This is some simple HTML, CSS, and JavaScript code that simply shows the image and changes the date, month, and day of the week in real time.

This was originally inspired by [this video](https://youtu.be/0H_R_mcVBMI?list=LL)

---

### Steps to getting this to work on your own Firefox

1. Make sure you have Node.js installed, if not, download it.
2. Install http-server globally ("npm install -g http-server", if you are faced with an error, run "sudo npm install -g http-server")
3. Clone this repository, the location does not matter.
4. Open up your command line and navigate to where you cloned this repository.
5. Once you're in the correct directory, run one of the following commands:
⋅⋅* http-server (uses the default, a.k.a "8080")
⋅⋅* http-server -p xxxx (uses a specific, 4 digit server)
6. Now, open Firefox and go to "about:preferences#home"
7. Find "Homepage and new windows" and click the drop down. Select "Custom URLs..."
8. Input the following: http://localhost:xxxx (where xxxx is your server)
9. Restart Firefox

---

### Don't want to run a local server just to change your Firefox's homepage?

This project is being hosted on [GitHub Pages](https://alockinalock.github.io/Custom-Homepage-Firefox/). Simply ignore steps 1 through 5 for the local server, and in step 8 input the GitHub Pages link.

---

### Need help stopping the server?

This is not a thing specific to this project. If you need to know how to stop the server, I suggest you start googling and researching. Hey, even ChatGPT could help you.

---

### Want to see what it actually looks like?

It looks like this.

![Screenshot 2023-08-27 at 2 12 50 AM](https://github.com/alockinalock/Custom-Homepage-Firefox/assets/113492071/2007f6a9-9733-4f35-8d29-41d69b82d1f6)

---

### Will these be an extension?

Most likely not. This was a small project I created for fun. In the end, not even I use it anymore. If you'd prefer to not have the URL appear in the search bar, forcing you to use the CTRL/CMD + L shortcut, or whatever other problem that can be fixed by an extension, I suggest you use [Tabliss.io](https://tabliss.io/). I'm not at the level of making such an extension, so I'll let the people who do it better handle this one.
