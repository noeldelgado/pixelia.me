#!/bin/bash

# brew install imagemagick
# brew instasll webp

DIR_IN="$1"
DIR_OUT="$2"
FILES="${3:-*.png}"

for f in $DIR_IN/$FILES
do
  FILE_NAME="$(basename -s .png $f)"
  cp $f $DIR_OUT/ # copy original 800
  convert $f $DIR_OUT/"$FILE_NAME".webp # convert original to  webp
  # cwebp $f -lossless -m 6 -pass 10 -mt -q 100 -o $DIR_OUT/"$FILE_NAME".webp

  for i in 400 308 616 272 544 227 454 #breakpoints
  do
    convert $f -resize "$i" $DIR_OUT/"$FILE_NAME"-"$i".png # resized png
    convert $f -resize "$i" $DIR_OUT/"$FILE_NAME"-"$i".webp # resized webp
    # cwebp $f -lossless -z 0 -mt -resize "$i" 0 -o $DIR_OUT/"$FILE_NAME"-"$i".webp
  done
done
