:: 进入当前目录
cd %~dp0

:: 删除多余的文件
rd /s/q node_modules
rd /s/q docs\\.vuepress\\dist

:: 将源码上传至github
git init
git add -A
git commit -m 'submit'

git push -f git@github.com:forwardfirst/antizen-note.git master


:: 生成静态文件
npm run build

:: 进入生成的文件夹
cd docs/.vuepress/dist

:: 上传至静态展示github

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:forwardfirst/antizen-note.git master:gh-pages
