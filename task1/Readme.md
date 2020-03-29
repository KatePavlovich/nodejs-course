# Task 1. Caesar cipher CLI tool

## Downloading

```
git clone [repo](https://github.com/KatePavlovich/nodejs-course)
```

## Installing NPM modules

Open folder task1 from repo

```
npm install
```

## Running application

```
$ node caesar_cli -a decode -s 7 -i "./data.txt" -o "./output.txt"
```

CLI tool accepts 4 options (short alias and full name):

- -s, --shift: a shift (number)
- -i, --input: an input file
- -o, --output: an output file
- -a, --action: an action encode/decode
