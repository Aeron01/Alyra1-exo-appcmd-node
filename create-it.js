/* Ce programme qui sera lancer en ligne de commande du terminal devra :
1: Créer un dossier d'ont le chemin et le nom seront définie par l'utilisateur (parametre 1 pour le chemin et parametre 2 pour le nom de dossier)
2: Créer dans ce dossier, un fichier d'ont le nom sera défini par l'utilisateur et sera le parametre 3 
3: Devra écrire une string dans le fichier qui sera entrer en parametre 4
4: Vérifier avant tout que le chemin ou le dossier et le fichier n'existe pas déjà.
5: Si le chemin et le dossier sont existant, mais pas le fichier, le créer. Sinon quitter le programme en affichant un message.
*/

const chalk = require('chalk');
const { mkdirSync, openSync, writeFileSync, existsSync, fstat, closeSync } = require('fs')


if (process.argv.length !== 6) {
  console.log(chalk.redBright('Usage: node create-it.js path/ name_directory name_file string_write_in_to_the_file'))
  process.exit(1)
}
const path = process.argv[2]
const nameDir = process.argv[3]
const nameFil = process.argv[4]
const str = process.argv[5]

if (existsSync(`${path}${nameDir}`)) {
  if (existsSync(`${path}${nameDir}/${nameFil}`)) {
    console.log(chalk.redBright(`The path or directory or filename as already exists.`))
    process.exit(1)
  } else {
    console.log(chalk.yellowBright(`Creating empty file ${nameFil} in directory ${nameDir}`))
    closeSync(openSync(`${nameDir}/${nameFil}`, 'w'))
    console.log(chalk.greenBright('Done !'))
    console.log(chalk.yellowBright(`Writing in file the string ${str}`))
    writeFileSync(`${nameDir}/${nameFil}`, `${str}`)
    console.log(chalk.greenBright('Done !'))
    console.log(chalk.blueBright(`All step Done. According to your request you will find the file in the following path: ${path}${nameDir}/${nameFil}`))
  }
} else {
  console.log(chalk.yellowBright(`Creating directory in ${path}${nameDir}`))
  mkdirSync(`${path}${nameDir}`)
  console.log(chalk.greenBright('Done !'))
  console.log(chalk.yellowBright(`Creating empty file ${nameFil} in directory ${nameDir}`))
  closeSync(openSync(`${nameDir}/${nameFil}`, 'w'))
  console.log(chalk.greenBright('Done !'))
  console.log(chalk.yellowBright(`Writing in file the string ${str}`))
  writeFileSync(`${nameDir}/${nameFil}`, `${str}`)
  console.log(chalk.greenBright('Done !'))
  console.log(chalk.blueBright(`All step Done. According to your request you will find the file in the following path: ${path}${nameDir}/${nameFil}`))
}



