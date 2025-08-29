'use client'
import { useFormState } from 'react-dom'
import { submitContact } from '@/app/contact/actions'

const initialState = { success: false, errors: {} as Record<string, string[]> }

export function ContactForm() {
  const [state, action] = useFormState(submitContact, initialState)
  return (
    <form action={action} className="mx-auto max-w-xl space-y-6 bg-bp-surface/80 p-8 rounded-2xl shadow-3d backdrop-blur-md animate-fade-in">
      <input type="text" name="middleName" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label className="block font-medium mb-1">Parent name</label>
        <input name="name" className="w-full rounded-xl p-3 text-black shadow focus:outline-none focus:ring-2 focus:ring-bp-primary" required />
        {state.errors?.name && (
          <p className="text-bp-danger text-sm mt-1">{state.errors.name}</p>
        )}
      </div>
      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full rounded-xl p-3 text-black shadow focus:outline-none focus:ring-2 focus:ring-bp-primary"
          required
        />
        {state.errors?.email && (
          <p className="text-bp-danger text-sm mt-1">{state.errors.email}</p>
        )}
      </div>
      <div>
        <label className="block font-medium mb-1">Phone</label>
        <input name="phone" className="w-full rounded-xl p-3 text-black shadow focus:outline-none focus:ring-2 focus:ring-bp-primary" />
      </div>
      <div>
        <label className="block font-medium mb-1">Child’s age</label>
        <input
          name="childAge"
          className="w-full rounded-xl p-3 text-black shadow focus:outline-none focus:ring-2 focus:ring-bp-primary"
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Preferred communication method</label>
        <select
          name="preferredMethod"
          className="w-full rounded-xl p-3 text-black shadow focus:outline-none focus:ring-2 focus:ring-bp-primary"
          required
        >
          <option value="">Select</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">Primary goals</label>
        <textarea
          name="goals"
          className="w-full rounded-xl p-3 text-black shadow focus:outline-none focus:ring-2 focus:ring-bp-primary"
          required
        ></textarea>
      </div>
      <div>
        <label className="block font-medium mb-1">How did you hear about us</label>
        <input name="referral" className="w-full rounded-xl p-3 text-black shadow focus:outline-none focus:ring-2 focus:ring-bp-primary" />
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" name="consent" required className="accent-bp-primary" />
        <span className="text-sm">I consent to having this information stored.</span>
        {state.errors?.consent && (
          <p className="text-bp-danger text-sm ml-2">Consent required</p>
        )}
      </div>
      {state.success && (
        <p className="text-bp-success font-semibold">Thank you! We will be in touch.</p>
      )}
      <button
        type="submit"
        className="rounded-xl bg-bp-primary px-6 py-3 text-black font-semibold shadow-3d transition-3d hover:scale-105"
      >
        Submit
      </button>
    </form>
  )
}
