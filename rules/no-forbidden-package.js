const fs = require('fs');
const path = require('path');

const create = function (context) {
    return {
        ImportDeclaration(node) {
            if (!node || !node.source || !node.source.value) return;
            const importPath = node.source.value;

            if (isModule) {
                context.report({
                    node,
                    message: "Do not import another module's internal files or functionality.",
                });
            }
        }
    };
};

const meta = {
    type: 'suggestion',
    docs: {
        description: 'You should not import THAT WHICH IS FORBIDDEN.',
        category: 'Best Practices',
        recommended: true,
    }
}

module.exports = {
    create,
    meta
}
