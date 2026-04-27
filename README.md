# FamilyContext

Context-based identity layer for multi-profile apps.

One account. Multiple profiles.

---

Most auth systems assume one account = one user.

This breaks when accounts are shared or managed (families, education, devices).

Developers end up hacking roles or duplicating auth.

---

FamilyCTX adds a simple layer on top of auth:

Account (login)
  → Profiles (people inside the account)
  → Active context (current profile)

---

You log in once.
You switch profiles inside the app.

Everything runs off the active context.
