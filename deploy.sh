#!/usr/bin/env sh

# check .env file
if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
else
  echo "The file .env not found!"
  exit 0
fi

# abort on errors
# set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:$VUE_APP_USER_NAME/$VUE_APP_USER_NAME.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/$VUE_APP_USER_NAME/$VUE_APP_REPO_NAME.git master:gh-pages
cd -