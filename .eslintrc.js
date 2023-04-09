
module.exports = {

	env: {
		browser: true,
		es2021: true,
		jest: true,
	},

	extends: ["eslint:recommended", 
						"plugin:react/recommended",
						"plugin:i18next/recommended"],

	overrides: [
		{
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				"indent": [2, 4],
				"react/jsx-indent": [2, 4],
				"no-unused-vars": "off",
				"react/react-in-jsx-scope": "off",
				"i18next/no-literal-string": ["error", {markupOnly: true}],
				//"no-undef": "off",
			},
		},
	],

	plugins: ["react", "i18next"],
	
	parser: "@typescript-eslint/parser",

	parserOptions: {
		"ecmaFeatures": {
			"jsx": true
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},

	rules: {
	},
	globals: {
		__IS_DEV__: true,
		require: null,
		__dirname: null,
		module: null,
	}
};


