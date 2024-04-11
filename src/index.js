#!/usr/bin/env node

const path = require('path');
const validate = require('./validate');
const createComponent = require('./createComponent');

// Get the component name from the command line arguments
let componentName = process.argv[2];
if (!componentName) {
    console.error('Please provide a component name');
    process.exit(1);
}

// Validate the component name
if (!validate(componentName)) {
    console.error('Invalid component name');
    process.exit(1);
}

const dir = path.join('components', componentName);

// Create the component
createComponent(dir, componentName);