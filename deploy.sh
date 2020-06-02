#!/bin/bash

projectName='watermelon-front'
projectURL='https://github.com/eminemwork/watermelon-front.git'

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

isExistFolder
if [ $? -eq 0 ]
then
  git clone $projectURL
  npm install
fi

cd $projectName

npm build

