import { libraryFunction } from "..";

describe('Library Function',() => {
    it('Returns unreversed string correctly',() => {
        assert.is_equal('1,2,3,4', libraryFunction([1, 2, 3, 4], false));
    });
    it('Returns unreversed string correctly',() => {
        assert.is_equal('4,3,2,1', libraryFunction([1, 2, 3, 4], true));
    });
})