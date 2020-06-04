#!/bin/bash

projectName='watermelon-front'
projectURL='https://github.com/eminemwork/watermelon-front.git'
projectPath='/home/watermelon-front'

isExistFolder() {
  for i in `ls`
  do
    if [ "$i" == "$projectName" ]
    then
      return 1;
    fi
  done
  return 0;
}

cd /home

isExistFolder
if [ $? -eq 0 ]
then
  git clone $projectURL
  cd $projectName
  npm install
  npm audit fix
  npm run-script build
  exit 100
fi

cd $projectName

git fetch origin
if [ -z $(git diff origin) ]
then
  echo 'Latest Code'
  npm run-script build
else
  git pull origin
  npm install
  npm audit fix
  npm run-script build
fi

systemctl stop nginx
systemctl start nginx