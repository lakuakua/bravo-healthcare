# BRAVO HEALTHCARE — CURSOR MASTER RULES

## 1. PROJECT OVERVIEW

Build a professional, modern, accessible healthcare website for **Bravo Healthcare**.

Bravo Healthcare represents two divisions:

1. **Bravo Home Health**
2. **Bravo Residential**

The website must present Bravo Healthcare as the primary brand while clearly separating the two divisions.

### Core Brand Message

Bravo Healthcare provides compassionate care and dependable support in home and residential settings, helping individuals live safely, comfortably, and independently.

### Primary Website Goals

The website should:

- Build trust with prospective clients and families.
- Clearly explain Bravo Healthcare services.
- Generate home-health inquiries.
- Generate professional healthcare referrals.
- Introduce Bravo Residential.
- Generate career inquiries.
- Explain the service area.
- Provide clear contact information.
- Present Bravo Healthcare as a professional, compassionate, modern healthcare organization.

---

# 2. SOURCE OF TRUTH

The official Bravo Healthcare source document is the primary content source for:

- Company description
- Mission
- Services
- Service area
- Referral information
- Insurance/payment language
- Contact information
- Bravo Residential status

Use the approved Bravo Healthcare source document as the source of truth.

## DO NOT INVENT

Never invent:

- Services
- Certifications
- Accreditations
- Licenses
- Insurance companies
- Medicaid participation
- Medicare participation
- Statistics
- Number of clients served
- Number of employees
- Years in business
- Awards
- Testimonials
- Reviews
- Ratings
- Medical claims
- Clinical outcomes
- Phone numbers
- Fax numbers
- Office locations
- 24/7 availability
- Emergency services
- Residential availability
- Healthcare partnerships

If information is unavailable, leave it out or create a clearly marked placeholder for the site administrator.

Never present a placeholder as real information.

---

# 3. REFERENCE WEBSITE

Use:

https://noellephilips.com/

only as **design and structural inspiration**.

Do not:

- Copy the website.
- Copy its wording.
- Copy its source code.
- Copy its exact layout.
- Copy its branding.
- Copy its images.
- Copy testimonials.
- Copy statistics.
- Copy service claims.

The Bravo Healthcare website should feel more modern, spacious, polished, premium, and intentional.

---

# 4. TECH STACK

Use the following stack unless explicitly instructed otherwise.

- Next.js 15+
- App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- React Hook Form
- Zod

Hosting target:

- Vercel

Potential future integrations:

- Resend
- Supabase
- Google Maps
- Sanity CMS
- Secure referral system

Do not add unnecessary libraries.

Prefer native Next.js capabilities whenever practical.

---

# 5. PROJECT ARCHITECTURE

Use a clean reusable structure similar to:

```text
bravo-healthcare/
│
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   └── bravo-healthcare-logo.png
│   │   ├── hero/
│   │   ├── services/
│   │   ├── residential/
│   │   ├── about/
│   │   ├── careers/
│   │   └── testimonials/
│   │
│   └── documents/
│
├── reference/
│   ├── bravo-healthcare-content.md
│   └── source-documents/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── home-health/
│   │   │   └── page.tsx
│   │   ├── residential/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── referrals/
│   │   │   └── page.tsx
│   │   ├── careers/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   ├── accessibility/
│   │   │   └── page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── services/
│   │   ├── forms/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── services.ts
│   │   ├── counties.ts
│   │   ├── navigation.ts
│   │   └── company.ts
│   │
│   ├── lib/
│   ├── hooks/
│   ├── types/
│   └── styles/
│
├── .env.local
├── README.md
└── package.json
```

---

# 6. BRAND

## Logo

Use the official Bravo Healthcare logo.

Store it at:

```text
/public/images/logo/bravo-healthcare-logo.png
```

Do not redraw, recreate, stretch, distort, recolor, or modify the logo without explicit instruction.

Keep sufficient whitespace around the logo.

---

# 7. COLOR PALETTE

Use colors derived from the Bravo Healthcare identity.

```css
--bravo-navy: #012A62;
--bravo-blue: #003B7A;
--bravo-teal: #0198A1;
--bravo-light-teal: #8FD4DB;
--bravo-red: #DD1B23;

--white: #FFFFFF;
--off-white: #F7FAFC;
--light-gray: #EDF2F7;

--text-dark: #182230;
--text-gray: #586474;
```

## Color Usage

### Navy

Use for:

- Main headings
- Navigation
- Primary buttons
- Footer
- Major CTA backgrounds
- High-emphasis text

### Teal

Use for:

- Icons
- Accent lines
- Secondary buttons
- Hover effects
- Pills
- Section highlights
- Decorative elements

### Red

Use sparingly.

Use primarily as:

- Medical accent
- Small icon accent
- Important alert accent

Do not make red a dominant website color.

### Backgrounds

Prefer:

- White
- Off-white
- Very pale blue
- Very pale teal

Avoid excessive gradients.

---

# 8. TYPOGRAPHY

Preferred typography:

```text
Headings: Manrope
Body: Inter
```

Use `next/font`.

## Typography Principles

- Large readable headlines
- Comfortable line height
- Short paragraphs
- Strong hierarchy
- Avoid overly thin fonts
- Avoid decorative fonts
- Avoid tiny healthcare disclaimer text

Recommended desktop hero heading:

```text
clamp(2.5rem, 5vw, 4.75rem)
```

Body text should generally remain at least:

```text
16px
```

Prefer:

```text
18px
```

for primary marketing copy.

---

# 9. DESIGN DIRECTION

The website should communicate:

- Trust
- Compassion
- Safety
- Professionalism
- Independence
- Family support
- Reliability

Overall aesthetic:

```text
Clean + Premium + Warm + Professional + Modern
```

Avoid the appearance of:

- Generic healthcare templates
- Hospitals
- Emergency medicine
- Corporate insurance companies
- Overly clinical environments
- Cheap home-care templates

The site should feel centered around:

```text
Home + Care + Trust + Independence + Family
```

rather than:

```text
Hospital + Illness
```

---

# 10. UI DESIGN PRINCIPLES

Use:

- Generous whitespace
- Consistent section spacing
- Soft rounded corners
- Minimal shadows
- High-quality photography
- Large accessible typography
- Clear CTA hierarchy
- Subtle animations
- Consistent iconography
- Clear separation between content areas

Recommended border radius:

```text
12px–24px
```

Recommended section spacing:

```text
80px–120px desktop
64px–80px tablet
48px–64px mobile
```

Avoid excessive animation.

Animations should enhance usability rather than distract from the content.

---

# 11. NAVIGATION

Primary navigation:

```text
Home
About
Home Health
Residential
Services
Referrals
Careers
Contact
```

Primary CTA:

```text
Get Started
```

Secondary healthcare-professional CTA:

```text
Make a Referral
```

Mobile navigation should collapse into a clean accessible menu.

---

# 12. GLOBAL COMPONENTS

Create reusable components.

At minimum:

```text
UtilityBar
Header
DesktopNavigation
MobileNavigation
Footer
HeroSection
SectionHeading
ServiceCard
ServiceGrid
CTASection
ContactForm
ReferralForm
CountyGrid
Breadcrumb
ResidentialComingSoon
EmergencyNotice
MissionSection
InsuranceNotice
ImageTextSection
StatsSection
```

Do not duplicate large blocks of markup.

---

# 13. COMPANY INFORMATION

## Bravo Healthcare

Bravo Healthcare represents:

- Bravo Home Health
- Bravo Residential

Bravo Healthcare provides compassionate care and dependable support at home and in residential settings, helping individuals live safely, comfortably, and independently.

---

# 14. MISSION

Official mission:

> Our mission is to improve the quality of life of every individual we serve by providing personalized care that promotes comfort, dignity, and well-being for clients and their caregivers.

Do not materially change the meaning of the mission.

It may be shortened for small UI elements, but the full official mission should appear prominently on the website.

---

# 15. BRAVO HOME HEALTH

Primary positioning:

# Professional Care in the Comfort of Home

Bravo Home Health provides compassionate home-based healthcare and services to help individuals safely manage their health, maintain independence, and remain comfortable at their residence.

Services may depend on:

- Assessed needs
- Physician orders
- Eligibility
- Authorization
- Agency-approved service categories

Do not imply every service is available to every individual.

---

# 16. HOME HEALTH SERVICES

## Skilled and Private Duty Nursing

Bravo provides skilled and extended-hour nursing care for children and adults with medical and complex care needs.

Approved service examples include:

- Health assessments
- Vital-sign monitoring
- Medication administration
- Medication education
- Chronic disease care
- Wound care
- Post-surgical care
- Tracheostomy care
- Ventilator care
- Oxygen support
- Respiratory care
- G-tube feeding
- Catheter care
- Ostomy care
- Seizure precautions
- Aspiration precautions
- Infection precautions
- Skin precautions
- Patient education
- Caregiver education
- Coordination with physicians
- Coordination with the healthcare team

Do not add clinical services that are not supported by Bravo's approved source content.

---

# 17. PERSONAL ASSISTANCE SERVICES

Approved examples include:

- Bathing
- Grooming
- Dressing
- Toileting
- Mobility support
- Transfers
- Walking assistance
- Meal preparation
- Feeding support
- Medication reminders
- Light housekeeping
- Laundry
- Appointment assistance
- Activity assistance
- Respite care
- Companionship

Position these services around:

- Independence
- Safety
- Comfort
- Daily living support

---

# 18. THERAPY SERVICES

When authorized and available, therapy services may include:

## Physical Therapy

Focus messaging on:

- Mobility
- Strength
- Coordination
- Safety
- Daily functioning

## Occupational Therapy

Focus messaging on:

- Daily functioning
- Independence
- Safety
- Coordination

## Speech-Language Pathology

Focus messaging on:

- Communication
- Swallowing
- Daily functioning

Always retain the qualification:

> When authorized and available.

Do not imply therapy services are guaranteed.

---

# 19. MEDICAL SOCIAL SERVICES

Medical social services may assist individuals and families with:

- Psychosocial assessments
- Community-resource identification
- Long-term care planning
- Financial-resource referrals
- Social-resource referrals
- Adjustment to illness
- Adjustment to disability
- Coordination with community organizations
- Patient support
- Family support

---

# 20. BRAVO RESIDENTIAL

Primary positioning:

# A Safe Place to Call Home

Bravo Residential is currently being developed.

It should be represented as:

```text
COMING SOON
```

It is intended to provide safe, welcoming, person-centered living environments for eligible individuals who need assistance with:

- Daily living
- Personal development
- Community participation

Never imply:

- Bravo Residential is currently operating.
- Bravo Residential is currently accepting residents.
- Residential beds are available.
- Specific residential programs exist unless provided in approved content.

Primary CTA:

```text
Receive Program Updates
```

---

# 21. SERVICE AREA

Bravo Home Health proudly serves eligible individuals and families throughout **Texas HHSC Region 6**.

Approved counties:

```text
Austin
Brazoria
Chambers
Colorado
Fort Bend
Galveston
Harris
Liberty
Matagorda
Montgomery
Walker
Waller
Wharton
```

Create reusable service-area data in:

```text
src/data/counties.ts
```

Example:

```ts
export const serviceCounties = [
  "Austin",
  "Brazoria",
  "Chambers",
  "Colorado",
  "Fort Bend",
  "Galveston",
  "Harris",
  "Liberty",
  "Matagorda",
  "Montgomery",
  "Walker",
  "Waller",
  "Wharton",
];
```

Do not add counties without authorization.

---

# 22. REFERRALS

Bravo accepts referrals from:

- Hospitals
- Rehabilitation facilities
- Physicians
- Case managers
- Other healthcare providers

The website must prominently support professional referrals.

Primary CTA:

```text
Make a Referral
```

Secondary CTA:

```text
Speak With Our Team
```

---

# 23. INSURANCE AND PAYMENT

Use cautious and accurate wording.

Approved wording:

> Please contact our office to verify current payer participation. Coverage, eligibility, authorization, and benefits must be verified before services begin. Acceptance of an insurance plan does not guarantee payment.

Do not display insurer logos unless current participation has been confirmed.

Do not claim:

- Medicare accepted
- Medicaid accepted
- Private insurance accepted

unless Bravo provides explicit confirmation.

---

# 24. CONTACT INFORMATION

Official currently available information:

```text
Bravo Healthcare

1601 Industrial Blvd, Ste 3059
Sugar Land, Texas 77478

Email:
admin@bravohcs.com

Office Hours:
Monday–Friday
9:00 a.m.–5:00 p.m.
```

Phone:

```text
NOT CURRENTLY PROVIDED
```

Fax:

```text
NOT CURRENTLY PROVIDED
```

Do not invent either one.

Emergency notice:

> For medical emergencies, call 911.

Display the emergency notice prominently enough to be seen but not as the primary website CTA.

---

# 25. WEBSITE PAGES

Build the following pages:

1. Home
2. About
3. Home Health
4. Residential
5. Services
6. Referrals
7. Careers
8. Contact
9. Privacy Policy
10. Accessibility

---

# 26. HOMEPAGE STRUCTURE

Homepage sections should follow this order.

## Section 1 — Utility Bar

Display:

```text
Serving Texas HHSC Region 6
```

```text
admin@bravohcs.com
```

```text
Monday–Friday • 9:00 AM–5:00 PM
```

Optional right-side CTA:

```text
Refer a Patient
```

---

# 27. HOMEPAGE — HEADER

Display:

- Bravo Healthcare logo
- Navigation
- Get Started button
- Optional referral CTA

Desktop and mobile versions required.

The header may become sticky after scrolling.

---

# 28. HOMEPAGE — HERO

Use a strong home-health lifestyle photograph.

Preferred visual:

- Nurse or caregiver
- Client
- Bright home environment
- Natural interaction
- Warm daylight
- Non-staged appearance

Avoid:

- Doctor staring at camera
- Surgical environments
- Emergency rooms
- Overly clinical stock photos

Recommended hero headline:

# Compassionate Care. Right Where You Call Home.

Supporting copy:

> Bravo Healthcare provides personalized home health and support services designed to help individuals live safely, comfortably, and independently.

Primary CTA:

```text
Explore Our Services
```

Secondary CTA:

```text
Contact Our Care Team
```

Supporting geographic line:

```text
Serving eligible individuals and families throughout Texas HHSC Region 6
```

---

# 29. HOMEPAGE — QUICK INQUIRY FORM

Heading:

# How Can We Help?

Fields:

```text
Full Name
Phone Number
Email Address
Service Interest
Message
```

Service dropdown:

```text
Home Health
Skilled Nursing
Private Duty Nursing
Personal Assistance
Physical Therapy
Occupational Therapy
Speech-Language Pathology
Medical Social Services
Residential Services
Referral Information
Careers
Other
```

CTA:

```text
Request a Call
```

Do not request:

- Social Security numbers
- Diagnoses
- Medication lists
- Medical records
- Insurance IDs
- Highly sensitive medical details

through the standard public contact form.

---

# 30. HOMEPAGE — ABOUT INTRO

Small heading:

```text
WELCOME TO BRAVO HEALTHCARE
```

Main heading:

# Care Built Around the Individual.

Introduce Bravo Healthcare.

Then create two prominent division cards.

## Bravo Home Health

Heading:

# Professional Care in the Comfort of Home

CTA:

```text
Explore Home Health
```

## Bravo Residential

Heading:

# A Safe Place to Call Home

Badge:

```text
COMING SOON
```

CTA:

```text
Learn More
```

---

# 31. HOMEPAGE — SERVICES

Heading:

# Comprehensive Care Designed Around Your Needs

Display service cards for:

1. Skilled & Private Duty Nursing
2. Personal Assistance Services
3. Physical Therapy
4. Occupational Therapy
5. Speech-Language Pathology
6. Medical Social Services

Each card should have:

- Icon
- Title
- Short description
- Learn More link

CTA beneath section:

```text
View All Services
```

---

# 32. SERVICE DATA ARCHITECTURE

Services must be maintained in:

```text
src/data/services.ts
```

Do not repeatedly hard-code services across multiple pages.

Each service object should support:

```ts
type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  category: string;
  availabilityDisclaimer?: string;
};
```

Populate service information only from approved Bravo content.

---

# 33. HOMEPAGE — WHY CHOOSE BRAVO

Use five feature cards.

## Personalized Care

Care centered around individual needs, circumstances, and goals.

## Compassion & Dignity

Support delivered with respect, understanding, and compassion.

## Coordinated Care

Collaboration with physicians, caregivers, families, and healthcare teams when appropriate.

## Independence

Support individuals in remaining safe and comfortable while maintaining as much independence as possible.

## Family Support

Support clients as well as the caregivers and families involved in their care.

Do not use unsupported superlatives.

Avoid:

```text
#1 Home Health Company
Best Home Care in Texas
Texas's Most Trusted Provider
Guaranteed Results
Best Nurses
```

unless those statements are properly supported and approved.

---

# 34. HOMEPAGE — MISSION

Use a strong dark navy section.

Small heading:

```text
OUR MISSION
```

Display the official mission prominently:

> Our mission is to improve the quality of life of every individual we serve by providing personalized care that promotes comfort, dignity, and well-being for clients and their caregivers.

Use large readable typography.

---

# 35. HOMEPAGE — HOW CARE BEGINS

Create a four-step visual process.

```text
01
Contact Bravo
```

```text
02
Discuss Your Needs
```

```text
03
Eligibility & Authorization Review
```

```text
04
Care Begins
```

Include appropriate qualifying text:

> Services may depend on assessed needs, physician orders, eligibility, authorization, and approved service categories.

Do not make the onboarding process appear guaranteed or instant.

---

# 36. HOMEPAGE — REFERRAL CTA

Heading:

# Referring a Patient or Client?

Copy should explain that Bravo accepts referrals from healthcare professionals and organizations including:

- Hospitals
- Rehabilitation facilities
- Physicians
- Case managers
- Healthcare providers

Buttons:

```text
Make a Referral
```

```text
Speak With Our Team
```

---

# 37. HOMEPAGE — SERVICE AREA

Heading:

# Proudly Serving Texas HHSC Region 6

Display all approved counties.

Use:

- County grid
- Simplified Texas map
- Region-style graphic

Do not imply statewide coverage.

---

# 38. HOMEPAGE — RESIDENTIAL SECTION

Use a lifestyle-focused residential image.

Badge:

```text
COMING SOON
```

Heading:

# A Safe Place to Call Home.

Explain the planned purpose of Bravo Residential.

CTA:

```text
Receive Program Updates
```

---

# 39. HOMEPAGE — INSURANCE

Heading:

# Insurance & Payment

Use the approved insurance disclaimer.

Keep this section concise and reassuring.

CTA:

```text
Verify Coverage
```

CTA may link to the contact page.

---

# 40. HOMEPAGE — TESTIMONIALS

Do not generate fake testimonials.

If no approved testimonials are available:

- Hide the testimonial section, or
- Build the component but keep the data empty.

Do not create fictional names.

Do not generate placeholder reviews that could be mistaken for real reviews.

---

# 41. HOMEPAGE — CAREERS CTA

Heading:

# Build a Career That Makes a Difference

Supporting copy:

> Join a team committed to compassionate, respectful, person-centered care.

Buttons:

```text
View Opportunities
```

```text
Submit Your Resume
```

Do not claim there are open jobs unless actual positions are supplied.

---

# 42. HOMEPAGE — FINAL CTA

Use a dark Bravo navy section.

Heading:

# Let's Discuss How Bravo Healthcare Can Help.

Buttons:

```text
Contact Us
```

```text
Make a Referral
```

---

# 43. FOOTER

Create four sections.

## Brand

Bravo Healthcare logo.

Short organization description.

## Quick Links

```text
Home
About
Home Health
Residential
Services
Referrals
Careers
Contact
```

## Services

```text
Skilled Nursing
Private Duty Nursing
Personal Assistance
Physical Therapy
Occupational Therapy
Speech-Language Pathology
Medical Social Services
```

## Contact

```text
1601 Industrial Blvd, Ste 3059
Sugar Land, Texas 77478

admin@bravohcs.com

Monday–Friday
9:00 AM–5:00 PM
```

Bottom row:

```text
© 2026 Bravo Healthcare. All Rights Reserved.
```

Links:

```text
Privacy Policy
Accessibility
```

Emergency message:

```text
For medical emergencies, call 911.
```

---

# 44. ABOUT PAGE

Use this structure:

```text
Hero
↓
Who We Are
↓
Bravo Healthcare
↓
Our Mission
↓
Our Approach to Care
↓
Bravo Home Health
↓
Bravo Residential
↓
Service Area
↓
CTA
```

Do not invent:

- Founding year
- Number of patients
- Number of nurses
- Number of caregivers
- Years of combined experience
- Awards
- Partnerships

---

# 45. HOME HEALTH PAGE

Hero heading:

# Professional Care in the Comfort of Home

Recommended structure:

```text
Hero
Overview
Skilled Nursing
Private Duty Nursing
Personal Assistance Services
Physical Therapy
Occupational Therapy
Speech-Language Pathology
Medical Social Services
Who May Benefit
How Services Begin
Referrals
Service Area
Contact CTA
```

Clearly communicate that availability can depend on:

- Assessed need
- Physician orders
- Eligibility
- Authorization
- Approved service categories

---

# 46. RESIDENTIAL PAGE

Hero:

# A Safe Place to Call Home

Badge:

```text
COMING SOON
```

Page structure:

```text
Hero
What Bravo Residential Is
Our Vision
Person-Centered Living
Daily Living Support
Personal Development
Community Participation
Program Updates Form
Contact CTA
```

Do not imply that residential services are currently active.

---

# 47. SERVICES PAGE

Use a visually organized service directory.

Suggested structure:

```text
Hero
Service Introduction
Skilled & Private Duty Nursing
Personal Assistance
Therapy Services
Medical Social Services
How Care Begins
Eligibility Disclaimer
Referral CTA
Contact CTA
```

Each service should use reusable content from `services.ts`.

---

# 48. REFERRAL PAGE

Target audience:

- Hospitals
- Rehabilitation facilities
- Physicians
- Case managers
- Healthcare providers

Recommended structure:

```text
Hero
Who Can Refer
Services Available
Referral Process
Referral Form
Contact Referral Team
Service Area
```

Referral form fields:

## Referral Source

```text
Full Name
Organization
Phone
Email
```

## Client

```text
Client Name
Preferred Phone
County
```

## Requested Service

```text
Skilled Nursing
Private Duty Nursing
Personal Assistance
Physical Therapy
Occupational Therapy
Speech-Language Pathology
Medical Social Services
Other
```

## Additional

```text
Additional Notes
Consent Checkbox
Submit
```

Use:

- React Hook Form
- Zod validation

Initially create a clean mocked submission handler.

Do not send PHI anywhere until an appropriate secure backend has been selected.

---

# 49. CONTACT PAGE

Recommended two-column layout.

## Left

Heading:

# Let's Discuss How Bravo Healthcare Can Help

Display:

```text
Address
Email
Office Hours
Service Area
```

## Right

Contact form.

Fields:

```text
Name
Email
Phone
Service Interest
Message
```

Below:

- Map section
- Emergency notice

If embedding a Google Map, do not expose unnecessary API secrets on the client.

---

# 50. CAREERS PAGE

Recommended structure:

```text
Hero
Careers at Bravo
Why Work With Bravo
Career Categories
Open Positions
General Application
Resume Submission
CTA
```

Potential career categories:

```text
Nursing
Caregiving
Therapy
Administrative
Residential Support
```

These are organizational categories only.

Do not present actual vacancies unless Bravo supplies them.

---

# 51. FORMS

All forms must:

- Have visible labels
- Have accessible error messages
- Validate input
- Have keyboard focus states
- Prevent duplicate submissions where practical
- Display success/error states
- Work on mobile
- Avoid requesting unnecessary medical information

Use:

```text
React Hook Form
Zod
```

Forms should be built so the submission layer can later connect to:

- Resend
- Supabase
- Secure CRM
- Other approved provider

---

# 52. PRIVACY AND HEALTHCARE DATA

This website is healthcare-related.

Do not automatically claim that the website, form, vendor, database, hosting provider, analytics implementation, or third-party service is HIPAA compliant.

Do not add a statement such as:

```text
This website is HIPAA compliant.
```

unless the entire implementation has been separately reviewed and approved.

Avoid collecting protected health information through general marketing forms.

For initial public forms, collect only information necessary to establish contact.

---

# 53. PHOTOGRAPHY DIRECTION

Use realistic, premium healthcare photography.

Recommended image categories:

```text
Hero
Nursing
Home care
Personal assistance
Physical therapy
Occupational therapy
Speech therapy
Family/client interaction
Medical social services
Residential lifestyle
Healthcare provider referral
Careers/team
Contact
```

Target approximately:

```text
12–18 high-quality images
```

Photography should feel:

- Natural
- Warm
- Diverse
- Modern
- Trustworthy
- Residential
- Human

Avoid:

- Obvious AI artifacts
- Unrealistic medical equipment
- Excessively posed caregivers
- Overly clinical environments
- Sad imagery
- Emergency situations
- Fake medical procedures
- Visible protected patient information

---

# 54. IMAGE PERFORMANCE

Use Next.js `<Image>` whenever possible.

Requirements:

- Correct width and height
- Responsive sizing
- WebP/AVIF where supported
- Lazy load below-fold imagery
- Prioritize hero imagery only when appropriate
- Descriptive alt text
- Avoid giant uncompressed images

Target excellent Core Web Vitals.

---

# 55. RESPONSIVE DESIGN

The website must work properly at:

```text
320px
375px
430px
768px
1024px
1280px
1440px
1920px
```

Mobile is not an afterthought.

Check:

- Navigation
- Hero
- Buttons
- Forms
- Cards
- Tables
- County grid
- Footer
- Long headings
- CTA sections

No horizontal scrolling.

---

# 56. ACCESSIBILITY

Target WCAG 2.2 AA where practical.

Requirements:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus indicators
- Accessible forms
- Appropriate labels
- Accessible dropdowns
- Descriptive alt text
- Skip-to-content link
- Color contrast
- Reduced-motion support
- Accessible mobile menu
- Accessible buttons and links
- Proper landmarks

Do not use color as the only indication of state.

---

# 57. ANIMATION

Use Framer Motion sparingly.

Acceptable:

- Subtle fade-up
- Short slide
- Soft card reveal
- Gentle hover
- Navigation transitions
- Counter animation only if real statistics exist later

Avoid:

- Excessive parallax
- Constant movement
- Huge zoom effects
- Cursor-following elements
- Animation that interferes with accessibility

Support:

```css
prefers-reduced-motion
```

---

# 58. SEO

Implement:

- Unique title tags
- Unique meta descriptions
- OpenGraph data
- Sitemap
- Robots configuration
- Canonical structure
- Semantic headings
- Good internal linking
- Descriptive image alt text

Primary geographic focus:

```text
Texas HHSC Region 6
```

Approved geographic areas:

```text
Austin County
Brazoria County
Chambers County
Colorado County
Fort Bend County
Galveston County
Harris County
Liberty County
Matagorda County
Montgomery County
Walker County
Waller County
Wharton County
```

Do not create spammy keyword-stuffed pages.

---

# 59. STRUCTURED DATA

Where appropriate, create organization/local-business structured data using only verified information.

Do not invent:

- Telephone
- Ratings
- Review counts
- Founding date
- Medical specialties
- Accreditation
- Price range
- Social media accounts
- Insurance acceptance

Use only known data.

---

# 60. PERFORMANCE

Aim for:

```text
Lighthouse Performance: 90+
Accessibility: 95+
SEO: 95+
Best Practices: 95+
```

Optimize:

- Images
- Fonts
- JavaScript
- Third-party scripts
- Animations
- CSS

Use server components by default.

Use client components only when interaction requires them.

---

# 61. CODE QUALITY

All generated code should be:

- Type-safe
- Reusable
- Maintainable
- Readable
- Consistently formatted
- Properly named
- Componentized
- Accessible

Avoid:

- Giant components
- Duplicate markup
- Unnecessary state
- Unnecessary `useEffect`
- `any`
- Inline styles where Tailwind works
- Hard-coded URLs everywhere
- Magic numbers
- Repeated company information

Create centralized configuration/data files.

---

# 62. COMPANY DATA FILE

Store organization information centrally.

Example:

```ts
export const company = {
  name: "Bravo Healthcare",
  email: "admin@bravohcs.com",
  address: {
    street: "1601 Industrial Blvd, Ste 3059",
    city: "Sugar Land",
    state: "Texas",
    zip: "77478",
  },
  hours: {
    days: "Monday–Friday",
    time: "9:00 a.m.–5:00 p.m.",
  },
  emergencyMessage: "For medical emergencies, call 911.",
};
```

Do not include phone or fax until supplied.

---

# 63. NAVIGATION DATA

Store navigation centrally.

Example:

```ts
export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Home Health", href: "/home-health" },
  { label: "Residential", href: "/residential" },
  { label: "Services", href: "/services" },
  { label: "Referrals", href: "/referrals" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
```

---

# 64. CONTENT STYLE

Bravo Healthcare content should sound:

- Warm
- Compassionate
- Professional
- Clear
- Reassuring
- Human
- Respectful

Avoid:

- Excessive marketing hype
- Medical jargon when plain language works
- Fear-based messaging
- Unsupported guarantees
- Exaggerated promises
- Overly sales-heavy language

Prefer:

```text
We support...
```

over:

```text
We guarantee...
```

Prefer:

```text
Services may include...
```

where availability varies.

---

# 65. CTA LANGUAGE

Primary approved-style CTAs:

```text
Get Started
Explore Our Services
Contact Our Care Team
Make a Referral
Speak With Our Team
Explore Home Health
Learn More
Receive Program Updates
Request a Call
Contact Us
View Opportunities
Submit Your Resume
Verify Coverage
```

Keep CTA wording concise.

---

# 66. ERROR STATES

Forms and interfaces should have professional error messaging.

Bad:

```text
ERROR!!!
```

Better:

```text
We couldn't submit your request. Please try again.
```

For network errors:

```text
Something went wrong while sending your request. Please try again or contact our office by email.
```

---

# 67. EMPTY STATES

If information is unavailable, use clean empty-state behavior.

Examples:

No jobs:

```text
There are no published openings at this time. You may submit a general application for future consideration.
```

No testimonials:

Do not display the testimonial section.

No phone number:

Do not display a phone field.

No insurance list:

Display the insurance verification notice rather than insurer logos.

---

# 68. DEVELOPMENT ORDER

Build the project in this order:

## Phase 1

1. Project architecture
2. Tailwind/theme setup
3. Fonts
4. Company data
5. Navigation data
6. Header
7. Footer

## Phase 2

8. Homepage
9. Mobile homepage
10. Homepage visual polish

## Phase 3

11. About
12. Services
13. Home Health
14. Residential

## Phase 4

15. Referrals
16. Contact
17. Careers

## Phase 5

18. Forms
19. Validation
20. Backend/email integration

## Phase 6

21. SEO
22. Structured data
23. Accessibility
24. Performance
25. Final responsive audit

Do not attempt to implement every feature in one giant component.

---

# 69. FIRST BUILD PRIORITY

When initially generating the website, build:

```text
1. Project architecture
2. Global theme
3. Header
4. Footer
5. Homepage
```

Before complex integrations.

The first version must already look polished before adding backend functionality.

---

# 70. HOMEPAGE UX REVIEW RULE

Whenever revising the homepage, evaluate it as an expert healthcare UI/UX designer.

Check:

- Is the company purpose clear within 5 seconds?
- Is Bravo Home Health clearly separated from Bravo Residential?
- Is the primary CTA visible?
- Is the referral path easy to find?
- Is typography easy to scan?
- Is the site visually trustworthy?
- Are sections spaced consistently?
- Does the site look premium rather than templated?
- Does mobile feel intentionally designed?
- Are there unsupported claims?

Correct problems before adding decorative features.

---

# 71. HEALTHCARE COMPLIANCE LANGUAGE

Be conservative with healthcare wording.

Never automatically describe Bravo as:

```text
licensed
certified
accredited
Medicare-certified
Medicaid-certified
HIPAA-compliant
award-winning
nationally recognized
```

unless verified information is supplied.

Never make clinical promises.

Do not state that a service will:

```text
cure
guarantee recovery
prevent hospitalization
eliminate symptoms
guarantee independence
```

unless properly supported and legally approved.

---

# 72. RESIDENTIAL STATUS RULE

This rule is mandatory.

Whenever Bravo Residential appears, clearly communicate that it is:

```text
COMING SOON
```

or:

```text
being developed
```

until this rule is explicitly changed.

---

# 73. INSURANCE STATUS RULE

Never generate an insurance logo strip based on assumptions.

If payer information has not been supplied, use:

> Please contact our office to verify current payer participation.

---

# 74. TESTIMONIAL RULE

Never fabricate a testimonial.

Never generate fictional:

- Patient names
- Family names
- Provider names
- Star reviews
- Google reviews
- Quotes

A testimonial component may exist only with:

- Approved real content, or
- Empty data that does not render publicly.

---

# 75. STATISTICS RULE

Never fabricate counters such as:

```text
500+ clients
100+ caregivers
20 nurses
15 years experience
98% satisfaction
5-star service
```

Counters can be enabled later when actual verified figures are supplied.

---

# 76. LOCATION RULE

Current address:

```text
1601 Industrial Blvd, Ste 3059
Sugar Land, Texas 77478
```

Use consistent formatting throughout the website.

Do not add additional locations without approval.

---

# 77. PHONE AND FAX RULE

The source material currently does not contain populated phone or fax numbers.

Therefore:

```text
DO NOT INVENT PHONE OR FAX NUMBERS.
```

Hide those fields until real numbers are supplied.

---

# 78. EMERGENCY RULE

Include:

> For medical emergencies, call 911.

Bravo Healthcare's normal website contact forms are not emergency communication channels.

Do not suggest otherwise.

---

# 79. DESIGN QUALITY RULE

Before considering any page complete, review:

```text
Typography
Spacing
Alignment
Responsiveness
Image quality
Accessibility
CTA consistency
Section rhythm
Visual hierarchy
Content accuracy
```

Do not accept a page merely because it compiles.

The result must look intentionally designed.

---

# 80. CURSOR BEHAVIOR

Whenever asked to modify the Bravo Healthcare project:

1. Inspect existing architecture first.
2. Reuse existing components.
3. Reuse existing data files.
4. Preserve brand styles.
5. Preserve approved healthcare wording.
6. Avoid duplicate code.
7. Do not remove functioning features unnecessarily.
8. Do not change global design patterns without reason.
9. Verify mobile layouts.
10. Run TypeScript checks after major changes.
11. Fix linting issues introduced by the change.
12. Maintain accessibility.

---

# 81. BEFORE CREATING NEW COMPONENTS

Check whether an existing reusable component already serves the purpose.

Prefer extending:

```text
SectionHeading
CTASection
ServiceCard
ImageTextSection
```

over creating:

```text
HomeSectionHeading
AboutSectionHeading
ServicesSectionHeading
```

without a real need.

---

# 82. BEFORE CHANGING CONTENT

If requested content conflicts with the approved source:

- Do not silently replace official content.
- Flag the conflict.
- Preserve the approved version unless explicitly instructed to update it.

---

# 83. BEFORE ADDING HEALTHCARE CLAIMS

Ask:

```text
Is this claim supported by approved Bravo Healthcare information?
```

If no:

Do not publish it.

---

# 84. FINAL PRE-LAUNCH CHECKLIST

Before recommending production deployment, verify:

- [ ] Bravo logo displays correctly
- [ ] Navigation works
- [ ] Mobile menu works
- [ ] All pages are responsive
- [ ] No unsupported healthcare claims
- [ ] No fake testimonials
- [ ] No fake statistics
- [ ] No invented insurance companies
- [ ] No invented phone number
- [ ] No invented fax number
- [ ] Residential shows Coming Soon
- [ ] Service area is accurate
- [ ] Contact address is accurate
- [ ] Email is accurate
- [ ] Office hours are accurate
- [ ] Emergency disclaimer appears
- [ ] Contact form validates
- [ ] Referral form validates
- [ ] Forms have accessible labels
- [ ] SEO metadata exists
- [ ] Sitemap works
- [ ] Robots configuration works
- [ ] Structured data contains only verified facts
- [ ] Images are optimized
- [ ] Alt text is present
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Reduced motion is respected
- [ ] No horizontal scroll exists
- [ ] TypeScript passes
- [ ] Linting passes
- [ ] Production build succeeds

---

# 85. FINAL PRODUCT STANDARD

The finished Bravo Healthcare website should immediately communicate:

> Bravo Healthcare is a professional, compassionate healthcare organization providing personalized home-based care while developing a person-centered residential program.

The website should feel:

```text
Trustworthy
Established
Compassionate
Modern
Professional
Premium
Easy to navigate
Family-centered
```

The design must support the Bravo Healthcare brand rather than overpower it.

Prioritize:

```text
Clarity > Decoration
Trust > Hype
Accessibility > Novelty
Accuracy > Marketing claims
Reusable architecture > Duplicate code
Performance > Excess animation
```

This rule applies throughout the entire Bravo Healthcare website project.