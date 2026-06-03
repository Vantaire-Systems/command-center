# GreenTrellis / Canopy — 2-Week Build Sprint

**Start:** June 2, 2026
**End:** June 16, 2026
**Goal:** Demo-ready POS system for Oklahoma cannabis dispensaries

---

## Pre-Sprint Checklist

- [x] Create GitHub repo: `Vantaire-Systems/greentrellis` — created (empty, ready for code)
- [x] Create GitHub repo: `Vantaire-Systems/canopy` — created (empty, ready for code)
- [ ] Get Metrc sandbox API credentials (https://metrc.com/sandbox) — **NEEDS ACTION: James to request**
- [ ] Confirm first customer lead contact info — **NEEDS ACTION: James to provide Grove/Grand Lake contact**
- [x] Set up project board in Kanban — Command Center Sprint tab is the tracker
- [x] Sprint plan documented — SPRINT-PLAN.md complete
- [x] Command Center deployed with sprint tracker — v3 live at command.vantairesystems.com

---

## DAY 1 — Foundation (June 2)

**Goal:** Docker environment + OpenTHC POS installed and running

### Tasks
- [ ] Install Docker + Docker Compose on dev machine
- [ ] Clone OpenTHC POS: `github.com/openthc/pos`
- [ ] Initialize submodules: `openthc/common`, `openthc/cre-adapter`
- [ ] Set up MySQL/MariaDB via Docker
- [ ] Configure `.env` with database credentials
- [ ] Run `composer install`
- [ ] Verify OpenTHC POS loads in browser
- [ ] Document setup in `docs/SETUP.md`

### Dockerfile (starter)
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:80"
    volumes:
      - .:/var/www/html
    depends_on:
      - db
  db:
    image: mariadb:10.11
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: greentrellis
      MYSQL_USER: greentrellis
      MYSQL_PASSWORD: greentrellis
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql
volumes:
  db_data:
```

### End of Day 1 Verification
- [ ] OpenTHC POS accessible at `localhost:8080`
- [ ] Database connection working
- [ ] No PHP errors in logs

---

## DAY 2 — Configuration (June 3)

**Goal:** OpenTHC POS configured for Oklahoma, basic settings done

### Tasks
- [ ] Configure OpenTHC for Oklahoma OMMA
- [ ] Set up admin user account
- [ ] Configure basic dispensary info (name, address, license # placeholder)
- [ ] Set up tax rates (OK state + local cannabis taxes)
- [ ] Configure receipt format
- [ ] Test basic session open/close

### End of Day 2 Verification
- [ ] Can create a new sales session
- [ ] Tax calculations working
- [ ] Receipt generates correctly

---

## DAY 3 — Metrc Integration (June 4)

**Goal:** Connect to Metrc sandbox, pull facility data

### Tasks
- [ ] Set up Metrc API service in OpenTHC
- [ ] Configure Metrc sandbox credentials
- [ ] Test facility authentication
- [ ] Pull facility info from Metrc
- [ ] Create Metrc sync service
- [ ] Document Metrc integration in `docs/METRC.md`

### End of Day 3 Verification
- [ ] Successfully authenticated with Metrc sandbox
- [ ] Facility data pulled
- [ ] Sync service runs without errors

---

## DAY 4 — OMMA Compliance Module (June 5)

**Goal:** OMMA-specific compliance features built

### Tasks
- [ ] Build patient age verification (18+ check)
- [ ] Build purchase limit tracking (OK limits: 3oz flower, 1oz concentrate, etc.)
- [ ] Build daily/monthly purchase history
- [ ] Build OMMA-required audit logging
- [ ] Build compliance report generator
- [ ] Add "OMMA patients 18+" disclosure to receipts

### End of Day 4 Verification
- [ ] Purchase limits enforced
- [ ] Audit log captures all transactions
- [ ] Compliance report generates
- [ ] Disclosure appears on receipts

---

## DAY 5 — Inventory Management (June 6)

**Goal:** Full inventory CRUD + Metrc sync

### Tasks
- [ ] Build inventory list view (table with search/filter)
- [ ] Build add new product form
- [ ] Build edit product form
- [ ] Build product categories (flower, concentrate, edible, etc.)
- [ ] Build batch/lot tracking
- [ ] Build low-stock alerts
- [ ] Sync inventory with Metrc

### End of Day 5 Verification
- [ ] Can add/edit/delete products
- [ ] Categories working
- [ ] Low-stock alert triggers
- [ ] Metrc sync working

---

## DAY 6 — Product Catalog (June 7)

**Goal:** Product catalog for customers (web view)

### Tasks
- [ ] Build public product catalog page
- [ ] Product cards with image, name, type, THC/CBD, price
- [ ] Category filtering
- [ ] Search by name
- [ ] Terpene profile display (safe language only)
- [ ] OMMA-compliant descriptions (no health claims)

### End of Day 6 Verification
- [ ] Catalog page loads
- [ ] Filters work
- [ ] No compliance violations in descriptions
- [ ] Mobile responsive

---

## DAY 7 — Customer Management (June 8)

**Goal:** Patient/customer CRM built

### Tasks
- [ ] Build customer list view
- [ ] Build add new patient form
- [ ] Patient profile page (purchase history, preferences)
- [ ] Medical card verification tracking (expiration dates)
- [ ] Customer notes/flags
- [ ] Purchase history per customer

### End of Day 7 Verification
- [ ] Can add/edit customers
- [ ] Medical card expiration tracking works
- [ ] Purchase history accurate
- [ ] Notes save correctly

---

## DAY 8 — Reporting Dashboard (June 9)

**Goal:** Management reports and analytics

### Tasks
- [ ] Build daily sales report
- [ ] Build weekly/monthly sales report
- [ ] Build inventory velocity report
- [ ] Build top products report
- [ ] Build customer retention metrics
- [ ] Build OMMA compliance report
- [ ] Build tax liability report
- [ ] Export to CSV/PDF

### End of Day 8 Verification
- [ ] All reports generate
- [ ] Data is accurate
- [ ] CSV export works
- [ ] PDF export works

---

## DAY 9 — UI/UX Polish (June 10)

**Goal:** Professional, clean interface

### Tasks
- [ ] Apply Vantaire design system (dark theme, consistent spacing)
- [ ] Improve navigation (sidebar + top bar)
- [ ] Add loading states + skeleton screens
- [ ] Add confirmation dialogs for destructive actions
- [ ] Add success/error toast notifications
- [ ] Improve form layouts and validation
- [ ] Add keyboard shortcuts for POS operations

### End of Day 9 Verification
- [ ] UI looks professional
- [ ] All forms have validation
- [ ] Loading states everywhere
- [ ] No UI glitches

---

## DAY 10 — Mobile Responsive (June 11)

**Goal:** Works on tablets (dispensary counter use)

### Tasks
- [ ] Test on tablet viewport (1024x768)
- [ ] Make POS layout touch-friendly
- [ ] Larger tap targets (min 44px)
- [ ] Swipe gestures for navigation
- [ ] Offline indicator (if time permits)
- [ ] Print-friendly receipt layout

### End of Day 10 Verification
- [ ] POS usable on tablet
- [ ] All buttons tappable
- [ ] Receipt prints correctly
- [ ] No horizontal scroll

---

## DAY 11 — Testing Round 1 (June 12)

**Goal:** Find and fix all critical bugs

### Tasks
- [ ] End-to-end POS transaction test
- [ ] Metrc sync test (add product → sync → verify)
- [ ] Purchase limit enforcement test
- [ ] OMMA compliance audit test
- [ ] Report accuracy test
- [ ] Test with 100+ products (performance)
- [ ] Cross-browser test (Chrome, Firefox, Safari)
- [ ] Document all bugs found

### End of Day 11 Verification
- [ ] All critical paths work
- [ ] No data loss scenarios
- [ ] Performance acceptable with 100+ products

---

## DAY 12 — Testing Round 2 (June 13)

**Goal:** Fix bugs from Day 11 + edge cases

### Tasks
- [ ] Fix all bugs from Day 11
- [ ] Test edge cases (empty inventory, expired cards, etc.)
- [ ] Test concurrent users (2+ sessions)
- [ ] Test data backup/restore
- [ ] Security review (SQL injection, XSS, CSRF)
- [ ] Update docs with any changes

### End of Day 12 Verification
- [ ] Zero known critical bugs
- [ ] Edge cases handled
- [ ] Security review passed

---

## DAY 13 — Deploy Staging (June 14)

**Goal:** Live staging environment

### Tasks
- [ ] Set up staging server (Hercules.app or VPS)
- [ ] Deploy to staging
- [ ] Configure production database
- [ ] Set up SSL certificate
- [ ] Configure domain (canopy.vantairesystems.com → staging)
- [ ] Smoke test on staging
- [ ] Set up automated backups

### End of Day 13 Verification
- [ ] Staging site accessible
- [ ] SSL working
- [ ] Database backed up
- [ ] All features work on staging

---

## DAY 14 — Demo Ready (June 15)

**Goal:** Demo-ready for first customer meeting

### Tasks
- [ ] Seed demo data (products, customers, transactions)
- [ ] Create demo script (2-minute walkthrough)
- [ ] Record demo video
- [ ] Prepare leave-behind materials
- [ ] Final bug sweep
- [ ] Deploy to production
- [ ] **SPRINT COMPLETE** 🎉

### End of Day 14 Verification
- [ ] Demo data loaded
- [ ] 2-minute walkthrough rehearsed
- [ ] Video recorded
- [ ] Production site live
- [ ] Ready to show Grove/Grand Lake

---

## Post-Sprint (June 16+)

- [ ] First customer demo (Grove/Grand Lake)
- [ ] Gather feedback
- [ ] Plan Sprint 2 based on feedback
- [ ] Set up billing (Stripe via Hercules)
- [ ] Onboard first paying customer

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | PHP / Slim (OpenTHC POS) |
| Database | MySQL / MariaDB (Docker) |
| Frontend | OpenTHC POS native + custom UI |
| Seed-to-Sale | Metrc API |
| Compliance | OMMA rules engine (custom) |
| Auth | Hercules.app |
| Hosting | TBD (Hercules or VPS) |
| Domain | canopy.vantairesystems.com |

## OpenTHC POS Notes

- Repo: https://github.com/openthc/pos
- Submodules: openthc/common, openthc/cre-adapter
- License: MIT
- Language: PHP 8.x
- Framework: Slim 4
- Database: MySQL/MariaDB
- This is a real, working cannabis POS — not a toy

## Compliance Absolute Bans (NEVER in the product)

1. No health/medical claims in any product descriptions
2. No minor appeals (cartoons, candy language)
3. No consumption imagery
4. No unverifiable superlatives
5. No Google/Meta paid ads
6. Required disclosure: "OMMA patients 18+ only"
7. Patient age verification ALWAYS required
8. Purchase limits ALWAYS enforced
9. Audit log ALWAYS maintained
10. Medical card expiration ALWAYS tracked
