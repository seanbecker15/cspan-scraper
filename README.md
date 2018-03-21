## Node.js/express website built for Dr. Sorin Matei in order to research mass communication at at Purdue University.
### Author: Sean Becker

#### Features:
* View Instagram images found using given hashtag

#### To Do:
* Obtain proper number of images using given count
* View statistics about each image
* Download prettified JSON with statistics about each image

#### Fun stuff (optional, yet to complete):
* Statistical analysis on images

#### How it works:
1. Pass hashtag and number of images to retrieve to back end
2. Use `https://www.instagram.com/explore/tags/{hashtag}/?__a=1` to get __nasty__ JSON
3. Parse JSON and send objects to front end
4. Display information on front end use ejs templating

