#/bin/bash

for f in $(ls | grep png)
do
	echo "$f"
	convert -resize 100x100 $f $f
done
