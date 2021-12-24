const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('github')
		.setDescription("Leo's GitHub"),
	async execute(interaction) {
        return interaction.reply('https://github.com/shen-leo');
	},
};