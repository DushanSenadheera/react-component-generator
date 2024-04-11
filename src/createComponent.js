const fs = require('fs');
const path = require('path');

module.exports = function createComponent(dir, componentName) {
    // Create the directory if it doesn't exist
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }

    // Create the React component file
    const filePath = path.join(dir, `${componentName}.jsx`);
    const content = `import React from 'react';
    import './${componentName}.css';

    export default function ${componentName}() {
        return (
            <div className = '${componentName}'>${componentName}</div>
        );
    }
    `;

    // Create the CSS file
    const cssFilePath = path.join(dir, `${componentName}.css`);
    const cssContent = `.${componentName} {
    /* Add your styles here */
}
`;

    fs.writeFile(filePath, content, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`✅ Component ${componentName} has been created`);
    });

    fs.writeFile(cssFilePath, cssContent, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`✅ CSS for ${componentName} has been created`);
    });
};