const {
  isValidUrl,
  summarizeRisk,
  formatFileSize,
  clamp,
  scoreToLabel
} = require("../src/utils");

describe("utils", () => {
  test("validates URLs", () => {
    expect(isValidUrl("https://example.com/test"))
      .toBe(true);
    expect(isValidUrl("not-a-url"))
      .toBe(false);
  });

  test("clamps numeric values", () => {
    expect(clamp(120, 0, 100)).toBe(100);
    expect(clamp(-10, 0, 100)).toBe(0);
  });

  test("maps score to labels", () => {
    expect(scoreToLabel(85)).toBe("critico");
    expect(scoreToLabel(60)).toBe("alto");
    expect(scoreToLabel(35)).toBe("medio");
    expect(scoreToLabel(10)).toBe("bajo");
  });

  test("summarizes risk", () => {
    expect(summarizeRisk(90)).toMatch("maliciosas");
    expect(summarizeRisk(10)).toMatch("leves");
  });

  test("formats file sizes", () => {
    expect(formatFileSize(0)).toBe("0 B");
    expect(formatFileSize(512)).toBe("512 B");
    expect(formatFileSize(2048)).toBe("2.0 KB");
  });
});
