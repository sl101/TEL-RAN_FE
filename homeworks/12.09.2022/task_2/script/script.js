const list = document.querySelector('.list');

const array = [
	{
		title: 'Li',
		descr: 'Linkedin',
		color: 'yellow',
	},
	{
		title: 'Fb',
		descr: 'Facebook',
		color: 'yellow',
	},
	{
		title: 'Db',
		descr: 'Dribble',
		color: 'yellow',
	},
	{
		title: 'Ct',
		descr: 'Commits',
		color: 'blue',
	},
	{
		title: 'Sl',
		descr: 'Slack',
		color: 'blue',
	},
	{
		title: 'Wk',
		descr: 'wikipedia',
		color: 'blue',
	},
	{
		title: 'Sp',
		descr: 'spotify',
		color: 'blue',
	},
	{
		title: 'Tw',
		descr: 'Twitter',
		color: 'yellow',
	},
	{
		title: 'Tc',
		descr: 'Twitch',
		color: 'yellow',
	},
	{
		title: 'Gt',
		descr: 'GitHub',
		color: 'blue',
	},
	{
		title: 'Yn',
		descr: 'Yarn',
		color: 'blue',
	},
	{
		title: 'Il',
		descr: 'Ilustration',
		color: 'blue',
	},
	{
		title: 'Te',
		descr: 'TellyStats',
		color: 'blue',
	},
	{
		title: 'Wu',
		descr: 'Wunderlist',
		color: 'blue',
	},
	{
		title: 'Cv',
		descr: 'Cooting',
		color: 'blue',
	},
	{
		title: 'Dg',
		descr: 'Dog Gifts',
		color: 'blue',
	},
	{
		title: 'Tg',
		descr: 'Toggl Blgg',
		color: 'blue',
	},
	{
		title: 'Gg',
		descr: 'Google',
		color: 'blue',
	},
	{
		title: 'Ex',
		descr: 'Excel',
		color: 'blue',
	},
	{
		title: 'So',
		descr: 'StackOv.',
		color: 'blue',
	},
	{
		title: 'Cd',
		descr: 'Coding',
		color: 'blue',
	},
	{
		title: 'Cp',
		descr: 'Codepen',
		color: 'blue',
	},
	{
		title: 'Tr',
		descr: 'Travel',
		color: 'blue',
	},
	{
		title: 'In',
		descr: 'Instagram',
		color: 'yellow',
	},
	{
		title: 'Mu',
		descr: 'Musicals',
		color: 'blue',
	},
	{
		title: 'Me',
		descr: 'Mames',
		color: 'blue',
	},
	{
		title: 'No',
		descr: 'Notion',
		color: 'blue',
	},
	{
		title: 'Re',
		descr: 'Reddit',
		color: 'yellow',
	},
	{
		title: 'Rd',
		descr: 'Research',
		color: 'blue',
	},
	{
		title: 'St',
		descr: 'Stats',
		color: 'blue',
	},
	{
		title: 'Ad',
		descr: 'Ads',
		color: 'blue',
	},
];

for (let i = 0; i < array.length; i++) {
	const { title, descr, color } = array[i];
	const item = document.createElement('li');
	item.classList.add('item');
	if (color == 'yellow') {
		item.classList.add('accent');
	}

	const titleFied = document.createElement('h2');
	titleFied.classList.add('title');
	titleFied.textContent = title;

	const descrField = document.createElement('span');
	descrField.textContent = descr;
	item.append(titleFied, descrField);

	list.append(item);
}
