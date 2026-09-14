const lintStagedConfig = {
  '**/*.{ts,tsx}': (filenames) => `eslint --fix ${filenames.join(' ')}`
}

export default lintStagedConfig
