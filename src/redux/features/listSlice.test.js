import fakeDataToTest from "../../utils/fakeDataToTest";
import listReducer from "./listSlice";

describe("Given a listSlice reducer", () => {
  describe("When it's called with an unknown action", () => {
    test("Then it should return the same initial value", () => {
      const action = {
        type: "list/doWhatYouWant",
      };
      const initialValue = fakeDataToTest;

      const receivedResult = listReducer(initialValue, action);

      expect(receivedResult).toEqual(initialValue);
    });
  });

  describe("When it's called with a delete action", () => {
    test("Then it should return an array with one object", () => {
      const action = {
        type: "list/removeItem",
        payload: 1,
      };
      const initialValue = fakeDataToTest;
      const receivedResult = listReducer(initialValue, action);

      expect(receivedResult).toHaveLength(1);
    });
  });

  describe("When it's called with a loadList action", () => {
    test("Then it should return an array with one object", () => {
      const valueToLoad = fakeDataToTest;
      const initialValue = [];
      const action = {
        type: "list/loadList",
        payload: valueToLoad,
      };
      const receivedResult = listReducer(initialValue, action);

      expect(receivedResult).toEqual(valueToLoad);
    });
  });
});
