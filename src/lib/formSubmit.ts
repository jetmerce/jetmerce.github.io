const FORMSUBMIT_AJAX_ENDPOINT = "https://formsubmit.co/ajax/jetmerceofficial@gmail.com";

type FormSubmitPayload = {
  success?: boolean | string;
  message?: string;
  error?: string | { message?: string };
};

function getErrorMessage(payload: FormSubmitPayload | null, status: number): string {
  const rawMessage = payload?.message ?? payload?.error;
  const message = typeof rawMessage === "string"
    ? rawMessage
    : rawMessage && typeof rawMessage === "object" && typeof rawMessage.message === "string"
      ? rawMessage.message
      : `The email form service returned HTTP ${status}.`;

  if (/activat/i.test(message)) {
    return `${message} Check jetmerceofficial@gmail.com, including Spam, for FormSubmit's activation email and click its activation link.`;
  }

  return message;
}

export async function submitToFormSubmit(formData: FormData): Promise<void> {
  let response: Response;

  const submissionData = Object.fromEntries(formData.entries());
  delete submissionData._next;

  try {
    response = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(submissionData),
    });
  } catch {
    throw new Error("Could not reach the email form service. Check your connection and try again.");
  }

  const payload = await response.json().catch(() => null) as FormSubmitPayload | null;
  const apiRejected = payload?.success === false || payload?.success === "false" || Boolean(payload?.error);

  if (!response.ok || apiRejected) {
    throw new Error(getErrorMessage(payload, response.status));
  }

  if (!payload || typeof payload !== "object") {
    throw new Error("The email form service returned an unreadable response. Please try again or contact us directly.");
  }
}
