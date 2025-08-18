#!/usr/bin/env bash
# Initialize a new project from this template
# Usage: ./scripts/init-new.sh <destination>
# Copies the template to <destination>, resets git history, and installs dependencies.

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <destination>"
  exit 1
fi

DEST="$1"

rsync -av --exclude node_modules --exclude .git --exclude scripts . "$DEST"
cd "$DEST"
rm -rf node_modules
rm -f package-lock.json
npm install
rm -rf .git
git init

echo "New project initialized in $DEST"
