@echo off
echo Starting dev server... > dev_server.log
echo PATH is %PATH% >> dev_server.log
where npm >> dev_server.log 2>&1
npm run dev >> dev_server.log 2>&1
