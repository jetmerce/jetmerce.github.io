import { afterEach, describe, expect, it, vi } from "vitest";
import { submitToFormSubmit } from "./formSubmit";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("submitToFormSubmit", () => {
  it("resolves when FormSubmit confirms success", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ success: "true", message: "Submitted" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    ));

    await expect(submitToFormSubmit(new FormData())).resolves.toBeUndefined();
  });

  it("uses a URL-encoded request without `_next` or a JSON preflight header", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ success: "true", message: "Submitted" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const formData = new FormData();
    formData.append("email", "visitor@example.com");
    formData.append("_next", "https://jetmerce.github.io/thank-you/");

    await submitToFormSubmit(formData);

    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://formsubmit.co/ajax/jetmerceofficial@gmail.com");
    expect(options.headers).toEqual({ Accept: "application/json" });
    expect(options.body).toBeInstanceOf(URLSearchParams);
    expect((options.body as URLSearchParams).toString()).toBe("email=visitor%40example.com");
  });

  it("explains how to handle an activation-required response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ success: "false", message: "This form needs activation" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    ));

    await expect(submitToFormSubmit(new FormData())).rejects.toThrow(/check jetmerceofficial@gmail.com/i);
  });

  it("does not treat an HTTP error as a successful submission", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ success: "false", message: "Request rejected" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      }),
    ));

    await expect(submitToFormSubmit(new FormData())).rejects.toThrow("Request rejected");
  });
});
