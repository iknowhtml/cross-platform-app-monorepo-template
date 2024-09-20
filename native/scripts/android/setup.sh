#!/bin/bash


SDK_PATH="$HOME//Library/Android/sdk"


# Define the path to the local.properties file
LOCAL_PROPERTIES_FILE="android/local.properties"

# Write the sdk.dir to the local.properties file
echo "sdk.dir = $SDK_PATH" > "$LOCAL_PROPERTIES_FILE"

echo "sdk.dir path written to $LOCAL_PROPERTIES_FILE"

pnpm android