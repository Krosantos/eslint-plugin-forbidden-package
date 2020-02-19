const getOptionsValid = function (options) {
    if (!options || !options.length || !Array.isArray(options[0])) return false;
    return true;
}

const create = function (context) {
    if (!getOptionsValid(context.options)) return {};
    return {
        ImportDeclaration(node) {
            const blacklist = context.options[0];
            if (!node || !node.source || !node.source.value) return;
            const importPath = node.source.value;
            if (blacklist.indexOf(importPath) !== -1) {
                context.report({
                    node,
                    message: `It is FORBIDDEN to import ${importPath} directly.`,
                    suggest: [{
                        desc: "Remove the FORBIDDEN import.",
                        fix: function (fixer) {
                            fixer.remove(node);
                        }
                    }]
                })
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
