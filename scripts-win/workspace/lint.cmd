@ECHO OFF
echo "┏━━━ 🕵️‍♀️ LINT: eslint src --ext ts,js,tsx,jsx ━━━━━━━"
yarn lerna run lint --stream --concurrency 4