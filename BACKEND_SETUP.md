# How to Connect Your Lead Form (Backend Setup)

Currently, the "Get Free Design Consultation" form is in **Simulation Mode**. It validates input, shows a loading state, and redirects to the Thank You page (triggering the Meta Pixel), but it does **not** send an email yet because there is no backend server connected.

To receive real emails, choose one of these simple options:

## Option 1: Formspree (Easiest — No Code)
1. Go to [https://formspree.io/](https://formspree.io/) and creates a free account.
2. Create a new form and get your **Form Endpoint URL** (e.g., `https://formspree.io/f/xyza...`).
3. Update `src/components/LeadForm.tsx`:

```tsx
// Inside LeadForm.tsx
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response = await fetch("YOUR_FORMSPREE_ENDPOINT", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            navigate("/thank-you-consultation", { ... });
        } else {
            alert("Something went wrong!");
        }
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
```

## Option 2: EmailJS (Free Tier Available)
1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/).
2. Create an Email Service (Gmail) and an Email Template.
3. Install SDK: `npm install @emailjs/browser`.
4. Update `LeadForm.tsx` to use `emailjs.sendResult()`.

## Option 3: Google Sheets (Free)
1. Create a Google Sheet.
2. Use Google Apps Script to create a Web App URL (`doPost`).
3. Send a POST request to that URL from the form (similar to Option 1).

---

## Current Status
- **UI/UX**: ✅ Working (Loading state + Redirect)
- **Tracking**: ✅ Working (Meta Pixel fires on Thank You page properly)
- **Data**: ⚠️ Logged to Console (Requires one of the above methods to save)
