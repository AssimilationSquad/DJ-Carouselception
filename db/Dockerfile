FROM mongo

COPY seed.txt /seed.json
CMD mongoimport --host mongodb --db similar --collection listings --type json --file /seed.json --jsonArray