"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const address = String(data.get("address") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const subject = encodeURIComponent(`Estimate request from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        phone ? `Phone: ${phone}` : null,
        `Email: ${email}`,
        address ? `Address: ${address}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setStatus("sent"), 400);
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-11 bg-card"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={site.phone}
            className="h-11 bg-card"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="h-11 bg-card"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address (Street, City, Zip Code)</Label>
        <Input
          id="address"
          name="address"
          autoComplete="street-address"
          placeholder="Street, city, zip"
          className="h-11 bg-card"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about the project or problem."
          className="bg-card"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          Please add your name, email, and a short message.
        </p>
      ) : null}
      {status === "sent" ? (
        <p className="text-sm text-foreground/80" role="status">
          Opening your email app - if nothing opens, write us at {site.email}.
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="h-12 rounded-md bg-signal px-6 text-base font-semibold text-white hover:bg-signal/90"
      >
        {status === "sending" ? "Opening email..." : "Send quote request"}
      </Button>
    </form>
  );
}
