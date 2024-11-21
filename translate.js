/**
 * Localization Generator
 * ©2024 Wilkin Games
 * https://wilkingames.com
 */
const INPUT_PATH = "./json/localization.json";
const OUTPUT_PATH = "";
const log = console.log;
const chalk = require("chalk");
const fs = require("fs");
if (!fs.existsSync(INPUT_PATH))
{
    log(chalk.red("Missing input JSON file -->"), chalk.yellow(INPUT_PATH));
    return;
}
const localization = require(INPUT_PATH);
const config = require("./config.json");
const translate = require("translate");
translate.engine = "google";
const languages = config.languages;
var data = {};
async function startBatch()
{
    var startTime = Date.now();
    log(languages.length, "languages");
    let keys = Object.keys(localization);
    log(keys.length, "keys");
    let max = keys.length * languages.length;
    log(max, "strings");
    let num = 0;
    let numTranslated = 0;
    log("Translating...");
    for (let i = 0; i < keys.length; i++)
    {
        let key = keys[i];
        let en = localization[key]["en"];
        data[key] = {
            en: en
        };
        for (let j = 0; j < languages.length; j++)
        {
            let lang = languages[j];
            let bExists = localization[key][lang] != null;
            if (!bExists)
            {
                let text = await translate(en, lang);
                data[key][lang] = text;
                numTranslated++;
            }
            else
            {
                data[key][lang] = localization[key][lang];
            }
            num++;
            if (!bExists)
            {
                log(chalk.magenta(Math.floor((num / max) * 100) + "%"), num, "of", max, chalk.cyan(lang), bExists ? chalk.green("exists") : chalk.yellow("translating"), key);
            }
        }
    }
    log("Writing to:", chalk.yellow(OUTPUT_PATH));
    fs.writeFile(OUTPUT_PATH, JSON.stringify(data, null, "\t"), "utf8", function (e) 
    {
        if (e)
        {
            return console.error(e);
        }
        log(numTranslated, "translated");
        let ms = Date.now() - startTime;
        log("Took", (ms / 1000) / 60, "minutes");
        log(chalk.green("Done"));
    });
}
startBatch();