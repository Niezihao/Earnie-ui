#!/usr/bin/env sh
###
 # @Descripttion: 
 # @Author: niezihao
 # @Date: 2023-12-05 11:12:34
 # @LastEditors: niezihao
 # @LastEditTime: 2023-12-29 17:19:41
### 

# 忽略错误
# set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

git remote add easyest https://github.com/Niezihao/Earnie-ui
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f easyest master

# cd -
