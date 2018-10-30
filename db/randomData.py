import numpy as np
import random
import os
import json 
dir_path = os.path.dirname(os.path.realpath(__file__))

sampleListings = []

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
    imgNum = random.randint(1, photoUrl[1])
    finalUrl = photoUrl[0] + str(imgNum) + ".jpg"
    imgs.append(finalUrl)
    intYN = random.randint(0, 1)
    if photoChoice in ("ice", "water", "mountain") and intYN:
      intUrl = "https://s3-us-west-1.amazonaws.com/dj-fec/photos/interiors/" + str(random.randint(1, 5)) + ".jpg"
      imgs.append(intUrl)

  doc = {}

  doc['_id'] = num
  doc['name'] = title
  doc['type'] = booking
  doc['beds'] = random.randint(1, 10)
  doc['price'] = random.randint(20, 201)
  doc['stars'] = random.randint(1, 5)
  doc['imgs'] = imgs

  sampleListings.append(doc)

with open(dir_path + '/seed.txt', 'w') as outfile:
    json.dump(sampleListings, outfile)

#print doc