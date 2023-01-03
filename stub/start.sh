#!/bin/sh

prism mock /work/swagger/api.yaml -h 0.0.0.0 -p 8080 &

while :; do sleep 10; done