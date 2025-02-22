module.exports = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow redundant explicit values in numeric enums',
            recommended: false,
        },
        schema: [],
        messages: {
            redundantEnumValue: 'Explicitly assigning {{ value }} is redundant in numeric enums.',
        },
        fixable: 'code',
    },
    create(context) {
        return {
            TSEnumDeclaration(node) {
                let expectedValue = 0;

                node.members.forEach((member, index) => {
                    if (!member.initializer) {
                        expectedValue++;
                        return;
                    }

                    if (member.initializer.type === 'Literal' && typeof member.initializer.value === 'number') {
                        if (index === 0) {
                            expectedValue = member.initializer.value + 1;
                            return;
                        }

                        if (member.initializer.value === expectedValue) {
                            context.report({
                                node: member.initializer,
                                messageId: 'redundantEnumValue',
                                data: {value: expectedValue},
                                fix(fixer) {
                                    return fixer.removeRange([member.id.range[1], member.initializer.range[1]]);
                                },
                            });
                        }
                        expectedValue = member.initializer.value + 1;
                    }
                });
            },
        };
    },
};
