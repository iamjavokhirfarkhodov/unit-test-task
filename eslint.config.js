import globals from 'globals';
import pluginJs from '@eslint/js';

export default [{languageOptions: {globals: globals.browser}}, {
    rules: {
        'indent': ['error', 2],
        'no-unused-vars': 'error',
        'quotes': ['error', 'single'],
        'arrow-spacing': 'error',
        'no-var': 'error'
    }
}, {
    ignores: ['node_modules', 'coverage', 'mochawesome-report', '.idea']
}, pluginJs.configs.recommended,];