# Localization Generator

Translation tool for game localization!

## Instructions

`npm install` - Install the required modules

Add the desired `localization.json` to the `json` directory. This file must contain `en` (English) localization as a base.

`npm start` - Starts the translation queue

Once complete, the new file will be saved into the `output` directory.

## Configuration

You can change the desired output languages in `config.json`.

## Note

This tool uses **Google's Translate API** for translations. It is not 100% accurate and should be reviewed for complex phrases.
