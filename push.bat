@echo off
set /p msg="Add a commit message: "
git add .
git commit -m "%msg%"
git push