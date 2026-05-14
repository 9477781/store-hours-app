@echo off
git status > git_status.txt 2>&1
git checkout main > git_checkout.txt 2>&1
git merge ui-display-check > git_merge.txt 2>&1
