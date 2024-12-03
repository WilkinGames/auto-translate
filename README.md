# Localization Generator

Translation tool for easy game localization!

This tool has been used to generate base localization for [Deadswitch 3](https://deadswitch3.com), [Dinogen Online](https://dinogenonline.com), [Arsenal Online](https://arsenalonline.net), and more.

## Instructions

`npm install` - Install the required modules

Add the desired `localization.json` to the `json` directory. This file must contain `en` (English) localization as a base.

`npm start` - Starts the translation queue

Once complete, the new file will be saved into the `output` directory.

## Details

Your input `localization.json` file should contain a single object with phrase keys.

For example, you supply the following `localization.json` file:

    {
      "STR_MULTIPLAYER": {
        "en": "Multiplayer"
        }
    }

After running the generator, the output `localization.json` would be:

    {
      "STR_MULTIPLAYER": {
        "en": "Multiplayer",
        "ru": "Мультиплеер",
        "zh": "多人游戏",
        "uk": "Мультіплеер",
        "fr": "Multijoueur",
        "tr": "Çok Oyunculu",
        "es": "Multijugador",
        "it": "Multigiocatore",
        "pt": "Multijogador",
        "de": "Mehrspieler",
        "pl": "Tryb wieloosobowy"
      }
    }

In your game, you would load the output file and reference the `"STR_MULTIPLAYER"` phrase to use the desired language.

## Configuration

You can change the desired output languages in `config.json` using the ISO 2-letter code.

For more info, see https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes

## Note

This tool uses **Google's Translate API** for translations. It is not 100% accurate and should be reviewed for complex phrases.
