# Namecheap Private Email — bravohcs.com

Office inbox: **admin@bravohcs.com** (approved in `reference/bravo-healthcare-content.md`).

Website forms use the same mailbox over SMTP (`src/lib/mail.ts`). Mobile and Outlook use IMAP/SMTP below.

Official Namecheap guides: [General configuration](https://www.namecheap.com/support/knowledgebase/article.aspx/1179/2175/general-private-email-configuration-for-mail-clients-and-mobile-devices/), [DNS on Namecheap nameservers](https://www.namecheap.com/support/knowledgebase/article.aspx/1338/2176/how-to-set-up-namecheap-private-email-dns-records-for-domains-on-namecheap-basicpremium-nameservers/).

## 1. Buy and activate Private Email

1. Namecheap → **Domain List** → **bravohcs.com** → add **Private Email** (one mailbox is enough to start).
2. Wait for subscription activation (MX verification; can take up to a few hours).

## 2. DNS (domain on Namecheap Basic/Premium DNS)

**Website (Vercel) and email can both use Namecheap Advanced DNS:**

- **Mail Settings:** choose **Private Email** (sets MX automatically), **or** Custom MX:
  - `@` MX **10** → `mx1.privateemail.com`
  - `@` MX **10** → `mx2.privateemail.com`
- **SPF** (TXT on `@`): `v=spf1 include:spf.privateemail.com ~all`
- **DKIM** (required for reliable sending): Private Email admin → generate DKIM → add TXT  
  `privateemail._domainkey` (older subscriptions may use `default._domainkey`).
- **Optional DMARC** (TXT `_dmarc`): e.g. `v=DMARC1; p=none; rua=mailto:admin@bravohcs.com`

Do **not** leave a **CNAME on `@`** for the bare domain; it breaks MX. Use **A/ALIAS** or **CNAME on `www`** for Vercel per Vercel’s docs.

If DNS is only on **Vercel nameservers**, add the same MX/TXT records in the Vercel project domain settings.

## 3. Create the mailbox

1. **Private Email** → **Manage** → create mailbox **admin** @ **bravohcs.com**.
2. Set a strong **Master password** (store in a password manager).
3. Confirm login at [https://privateemail.com/](https://privateemail.com/).

## 4. Phone and Outlook

| Setting | Value |
|--------|--------|
| Email / username | `admin@bravohcs.com` |
| Password | Master (or Application) password |
| Incoming (IMAP) | `mail.privateemail.com`, port **993**, SSL/TLS |
| Outgoing (SMTP) | `mail.privateemail.com`, port **465** SSL/TLS (or **587** STARTTLS) |
| SMTP authentication | **On** |
| SPA / secure password auth | **Off** |

- **iPhone / iPad:** Settings → Mail → Accounts → Add Account → Other → IMAP (or try automatic if autodiscover works).
- **Outlook (mobile or desktop):** Add account → IMAP; use manual settings above if autodiscover fails.

## 5. Vercel (contact + referral forms)

Production environment variables (never commit real passwords):

```env
SMTP_HOST=mail.privateemail.com
SMTP_USER=admin@bravohcs.com
SMTP_PASSWORD=<master-or-application-password>
SMTP_PORT=465
MAIL_FROM_ADDRESS=admin@bravohcs.com
CONTACT_TO_EMAIL=admin@bravohcs.com
```

Redeploy after saving env vars. Port **587** works if **465** is blocked (uncommon on Vercel).

## 6. Verify

1. Send a test message from webmail to an external address; check inbox (not spam).
2. Reply from the external address to `admin@bravohcs.com`; confirm it arrives on the phone.
3. Submit the **Contact** form on the live site; confirm delivery to the admin inbox and the visitor acknowledgment.

If SMTP auth fails from the site, confirm DKIM/SPF and that `SMTP_PASSWORD` matches the mailbox password exactly (no extra spaces).
