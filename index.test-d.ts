import {expectType} from 'tsd';
import sentence from './index.js';

expectType<string>(sentence());
expectType<string>(sentence({words: 3}));
expectType<string>(sentence({words: -1}));
