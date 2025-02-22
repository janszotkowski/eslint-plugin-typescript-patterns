const {RuleTester} = require('eslint');
const parser = require('@typescript-eslint/parser');
const rule = require('../../lib/rules/no-redundant-enum-values');

const ruleTester = new RuleTester({
    languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser,
    },
});

ruleTester.run('no-redundant-enum-values', rule, {
    valid: [
        {
            code: `enum Status {
                Pending,
                Approved,
                Rejected
            }`,
        },
        {
            code: `enum CustomValues {
                Start = 1,
                Middle = 3,
                End = 5
            }`,
        },
        {
            code: `enum Status {
                Pending = 0,
                Approved,
                Rejected
            }`,
        },
    ],
    invalid: [
        {
            code: `enum Status {
                Pending = 0,
                Approved = 1,
                Rejected = 2
            }`,
            errors: [
                {messageId: 'redundantEnumValue', data: {value: 1}},
                {messageId: 'redundantEnumValue', data: {value: 2}},
            ],
            output: `enum Status {
                Pending = 0,
                Approved,
                Rejected
            }`,
        },
        {
            code: `enum Example {
                One = 0,
                Two = 1,
                Three = 2,
                Custom = 5
            }`,
            errors: [
                {messageId: 'redundantEnumValue', data: {value: 1}},
                {messageId: 'redundantEnumValue', data: {value: 2}},
            ],
            output: `enum Example {
                One = 0,
                Two,
                Three,
                Custom = 5
            }`,
        },
    ],
});
