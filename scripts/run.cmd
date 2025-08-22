@echo off
setlocal ENABLEDELAYEDEXPANSION

set SRC=src
set OUT=out
set SRC_LIST=%OUT%\sources.txt

if not exist "%OUT%" mkdir "%OUT%"

if exist "%SRC_LIST" del /q "%SRC_LIST%"
dir /b /s %SRC%\*.java > "%SRC_LIST%"

echo Compiling Java sources...
javac -encoding UTF-8 -d "%OUT%" @"%SRC_LIST%"
if errorlevel 1 (
  echo Compilation failed.
  exit /b 1
)

echo Running AquaPredict demo...
java -cp "%OUT%" aquapredict.Main

endlocal
exit /b 0
