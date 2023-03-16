#!/bin/bash

# Delete all the files and folders in the current directory except "deploy.sh", ".git" and "/dist" folder, also include hidden folders
find . -maxdepth 1 -type d -not -name ".git" -not -name "dist" -exec rm -rf {} \;
find . -maxdepth 1 -type f -not -name "deploy.sh" -exec rm -rf {} \;


# Copy all the files and folders from the "/dist" folder to the current directory
cp -r dist/* .

# Delete the "/dist" folder
rm -rf dist