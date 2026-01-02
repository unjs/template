import { describe, expect, it } from "vitest";
import { test } from "../src/index.ts";

describe("packageName", () => {
  it("pass", () => {
    expect(test()).toBe("works!");
  });
});
