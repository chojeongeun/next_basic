/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
	reactStrictMode: false,
	sassOptions: {
		includePaths: [path.join(__dirname, 'style')],
		prependData: `@import "styles/_variables.scss";`,
	},
};

module.exports = nextConfig;
