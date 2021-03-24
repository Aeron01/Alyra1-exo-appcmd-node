/* programe qui devra :
1 creer un repertoir d'on le nom qu'on aura entrer en parametre 1
2 creer dans ce repertoir, un fichier (.js pour mon exemple) d'on le nom qu'on aura entrer en parametre 2
3 devra ecrire une string dans le fichier qui sera entrer dans le parametre 3
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

if (existsSync(`${path}${nameDir}` || `${nameFil}`)) {
  console.log(chalk.redBright(`The path or directory or filename as already exists.`))
  process.exit(1)
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
  console.log(`All step Done. according to your request you will find the file in the following path: ${path}${nameDir}/${nameFil}`)
}



