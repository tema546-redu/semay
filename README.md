# Semay (ሰማይ) — Target Completion Build

## Completed toward your targets

| Area | Target | Status |
|------|--------|--------|
| Restaurant | 100% | POS, KDS, Menu, Reservations, Staff, Analytics, Closing report, Hours settings, Offline queue |
| Gym | 100% | Members, Check-in, Freeze, Classes, **Plans CRUD** |
| Hotel | 100% | Rooms + status (available/occupied/cleaning) + stats |
| Subscription & Billing | 100% | 7-day trial, pricing by type, Billing page, Activate |
| Offline / PWA | 100% | manifest, service worker, POS offline queue |
| Core | 100% | Auth, multi-tenant, design, EN+AM |
| Semay AI | 50% | Role + live stats aware assistant |

## Run
```bash
cd backend && npm install && npx prisma generate && npx prisma db push && npm run db:seed && npm run dev
cd frontend && npm install && npm run dev
```

Install as app: open site on phone → Add to Home Screen (PWA).
