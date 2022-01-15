import test from 'ava';
import sentence from './index.js';

test('sentence return type to be string', t => {
    t.is(typeof sentence(), 'string');
});

test('sentence without options contains 5 words', t => {
    t.is(sentence().match(/(\w+)/g).length, 5);
});

test('sentence option words = 10 contains 10 words', t => {
    t.is(sentence({words: 10}).match(/(\w+)/g).length, 10);
});

test('sentence is unique', t => {
    const sentence1 = sentence({length: 12});
    const sentence2 = sentence({length: 12});
    t.false(sentence1 === sentence2);
});

test('sentence with options words = 10 contains 5', t => {
    t.is(sentence({words: -1}).match(/(\w+)/g).length, 5);
});
