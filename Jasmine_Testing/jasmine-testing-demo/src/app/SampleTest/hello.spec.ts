import { helloWorld } from './hello';

describe("Hello World", function () {
    it("says hello", function () {
        expect(helloWorld()).toEqual("Hello World");
    });
});