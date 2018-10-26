import numpy as np
import random

sampleListings = "["

for num in range(101):
  type1 = ['private', 'entire']
  type2 = ['lair', 'ice cave', 'water cave', 'castle', 'mountain cave']

  title1 = ['lovely', 'superior', 'great', 'wonderful', 'cozy', 'dank', 'damp', 'hidden']
  title2 = ['retreat', 'hideaway', 'sanctuary', 'haunt', 'cloister']

  title = np.random.choice(title1) + " " + np.random.choice(title2)

  booking = np.random.choice(type1) + " " + np.random.choice(type2)

  photoChoice = booking.split()[1]

  photoFolder = {
    "lair" : ["https://s3-us-west-1.amazonaws.com/dj-fec/photos/lairs/", 8],
    "ice" : ["https://s3-us-west-1.amazonaws.com/dj-fec/photos/ice_caves/", 5],
    "water" : ["https://s3-us-west-1.amazonaws.com/dj-fec/photos/water_caves/", 6],
    "castle" : ["https://s3-us-west-1.amazonaws.com/dj-fec/photos/castles/", 5],
    "mountain" : ["https://s3-us-west-1.amazonaws.com/dj-fec/photos/mountain_caves/", 5]
  }

  photoUrl = photoFolder.get(photoChoice)

  imgs = []

  numImgs = random.randint(3, 6)
  for i in range(numImgs):
    imgNum = random.randint(1, photoUrl[1] + 1)
    finalUrl = photoUrl[0] + str(imgNum) + ".jpg"
    imgs.append(finalUrl)
    intYN = random.randint(0, 2)
    if photoChoice in ("ice", "water", "mountain") and intYN:
      intUrl = "https://s3-us-west-1.amazonaws.com/dj-fec/photos/interiors/" + str(random.randint(1, 5)) + ".jpg"
      imgs.append(intUrl)

  doc = "{" + '\n'

  doc += '_id: ' + str(num) + ',\n'
  doc += 'name: ' + title + ',\n'
  doc += 'type: ' + booking + ',\n'
  doc += 'beds: ' + str(random.randint(1, 10)) + ',\n'
  doc += 'price: ' + str(random.randint(20, 201)) + ',\n'
  doc += 'stars: ' + str(random.randint(1, 5)) + ',\n'
  doc += 'imgs: ' + str(imgs) + '\n'

  doc += "},\n"

  sampleListings += doc

sampleListings += "]"

textfile = open('seed.txt', 'w')
textfile.write(sampleListings)
textfile.close()

#print doc