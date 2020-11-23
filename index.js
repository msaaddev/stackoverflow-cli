#!/usr/bin/env node

/**
 *
 * Author Saad Irfan, Angelina Gasharova, Aneesh Kodali
 * GitHub <https://github.com/MLH-Fellowship/sprint4>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');

(module.exports = async () => {
	const question = await init();
	cli(question);
})();
