import { describe, expect, it } from "vitest";
import { add } from "../src";

describe("packageName", () => {
  it("pass", () => {
    expect(add(1, 2)).toBe(3);
  });
});
