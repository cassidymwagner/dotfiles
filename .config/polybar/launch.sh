#!/usr/bin/env sh

## Add this to your wm startup file.

# Terminate already running bar instances
killall -q polybar

## Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

## Launch
MONITOR=eDP1 polybar -c ~/.config/polybar/config workspace &
MONITOR=eDP1 polybar -c ~/.config/polybar/config music &
MONITOR=eDP1 polybar -c ~/.config/polybar/config status &

