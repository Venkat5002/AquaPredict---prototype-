@echo off
echo Compiling Java sources...
if not exist "out" mkdir "out"
dir /b /s src\*.java > out\sources.txt
javac -encoding UTF-8 -d "out" @out\sources.txt
if errorlevel 1 (
  echo Compilation failed.
  pause
  exit /b 1
)

echo Running AquaPredict demo...
java -cp "out" aquapredict.Main
pause
