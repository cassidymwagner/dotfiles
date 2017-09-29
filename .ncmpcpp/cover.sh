#!/bin/bash
shopt -s nullglob

file="$(mpc --format /mnt/data/music/%file% current)"
printf "\e]20;;100x100+1000+1000\a"
for c in "${file%/*}/cover."*; do
	printf "\e]20;$c;50x50+1+94:op=keep-aspect\a"
done
