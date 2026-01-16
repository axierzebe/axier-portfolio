import { useMutation } from "@tanstack/react-query";
import type { InsertContactMessage } from "@shared/schema";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      // Enviar a Formspree (email)
      const res = await fetch("https://formspree.io/f/meeeovve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      // Formspree devuelve 200/2xx si ok
      if (!res.ok) {
        let details = "";
        try {
          const json = await res.json();
          details = json?.error || json?.message || JSON.stringify(json);
        } catch {
          // ignore
        }
        throw new Error(details || "Failed to send message");
      }

      return true;
    },
  });
}
