module.exports = {
	name: "Ben & Mari's Websites", // optional, falls back to object key
	description: "Websites of Benjamin Rancourt and Mariane Maynard",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.benjaminrancourt.ca/",
		"https://www.mamaisonsherby.ca/",
		"https://www.marianemaynard.ca/",
	]
};