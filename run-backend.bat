@echo off

REM Check if -r flag is passed
IF "%1"=="-r" (
    echo Resetting Nx cache...
    call nx reset
)

echo Starting Nx daemon...
call nx daemon --start

echo Checking daemon status...
call nx daemon

echo NX_DAEMON value:
echo %NX_DAEMON%

REM Set daemon to true
set NX_DAEMON=true

echo Serving backend...
call nx serve backend

